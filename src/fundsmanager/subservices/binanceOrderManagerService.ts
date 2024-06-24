import {
  OrderStatus,
  OrderType,
  RestTradeTypes,
  Side,
  Spot,
  TimeInForce,
} from '@binance/connector-typescript';
import { Injectable } from '@nestjs/common';
import { SettlementTransactionProcessStatus } from '@prisma/client';
import moment from 'moment';
import { PrismaService } from 'nestjs-prisma';
import { BinanceIncomingTxn } from 'src/@generated/binance-incoming-txn/binance-incoming-txn.model';
import * as Sentry from '@sentry/node';

interface OrdersResponse {
  symbol: string;
  orderId: number;
  orderListId: number;
  clientOrderId: string;
  price: string;
  origQty: string;
  executedQty: string;
  cummulativeQuoteQty: string;
  status: OrderStatus | '';
  timeInForce: TimeInForce | '';
  type: OrderType | '';
  side: Side | '';
  stopPrice: string;
  icebergQty: string;
  time: number;
  updateTime: number;
  isWorking: boolean;
  workingTime: number;
  origQuoteOrderQty: string;
}

interface ExchangeTokenInfoType {
  [symbol: string]: {
    minQty: number;
    maxQty: number;
    stepSize: number;
  };
}

@Injectable()
export class BinanceOrderManagerService {
  private exchangeTokenInfo: ExchangeTokenInfoType = {};

  constructor(private readonly prisma: PrismaService) {}

  async initExchangeInfo(binanceClient: Spot, tokens: string[]) {
    const _exchangeTokenInfo: ExchangeTokenInfoType = {};
    const info = await binanceClient.exchangeInformation();
    const infoSymbols = info.symbols;
    for (const token of tokens) {
      const pair = `${token}USDT`;
      const symbol = infoSymbols.find((symbol) => symbol.symbol === pair);
      const lotSizeFilter = symbol.filters.find(
        (filter) => filter.filterType === 'LOT_SIZE',
      );
      const minQty = parseFloat(lotSizeFilter['minQty']);
      const maxQty = parseFloat(lotSizeFilter['maxQty']);
      const stepSize = parseFloat(lotSizeFilter['stepSize']);

      _exchangeTokenInfo[pair] = {
        stepSize,
        maxQty,
        minQty,
      };
    }
    this.exchangeTokenInfo = _exchangeTokenInfo;
  }

  adjustToStepSize(number: number, stepSize: number) {
    const precision = Math.floor(Math.log10(1 / stepSize));
    return parseFloat(
      (Math.floor(number / stepSize) * stepSize).toFixed(precision),
    );
  }

  async initSellOrder(record: BinanceIncomingTxn, binanceClient: Spot) {
    try {
      const quantity = Number(record.amountInPaidCurrency);

      const pair = `${record.paidCurrency}USDT`;
      if (
        quantity < this.exchangeTokenInfo[pair].minQty ||
        quantity > this.exchangeTokenInfo[pair].maxQty
      ) {
        await this.prisma.binanceIncomingTxn.update({
          where: {
            id: record.id,
          },
          data: {
            status: 'FAILED',
            failedRemarks: `Quantity must be between ${this.exchangeTokenInfo[pair].minQty} and ${this.exchangeTokenInfo[pair].maxQty}`,
          },
        });
        return;
      }
      const stepSize = this.exchangeTokenInfo[pair].stepSize;
      const adjustedQuantity = this.adjustToStepSize(quantity, stepSize);
      if (adjustedQuantity === 0) {
        await this.prisma.binanceIncomingTxn.update({
          where: {
            id: record.id,
          },
          data: {
            status: 'FAILED',
            failedRemarks: `Adjusted quantity is zero after applying step size of ${stepSize}`,
          },
        });
        return;
      }

      const options: RestTradeTypes.newOrderOptions = {
        newClientOrderId: record.id,
      };
      if (record.paidCurrency === 'USDC' || record.paidCurrency === 'DAI') {
        options.quoteOrderQty = adjustedQuantity;
      } else {
        options.quantity = adjustedQuantity;
      }

      const resp = await binanceClient.newOrder(
        pair,
        Side.SELL,
        OrderType.MARKET,
        options,
      );

      const { orderId, transactTime } = resp;

      await this.prisma.binanceIncomingTxn.update({
        data: {
          status: 'SETTLEMENT_INITIALZED',
          settlementTransaction: {
            create: {
              orderId: orderId.toString(),
              orderplaceTime: moment(transactTime).toDate(),
            },
          },
        },
        where: {
          id: record.id,
        },
      });
    } catch (err) {
      console.error('initSellOrder', err, record.id);
      const sentryMsg = `initSellOrder ${err} ${record.id}`;
      Sentry.captureMessage(sentryMsg);
    }
  }

  async handleUnInitializedOrders(binanceClient: Spot) {
    const records = await this.prisma.binanceIncomingTxn.findMany({
      where: {
        status: 'PAYMENT_RECEIVED',
        paidCurrency: {
          not: 'USDT',
        },
      },
    });

    for (const record of records) {
      await this.initSellOrder(record, binanceClient);
    }
  }

  async manageOrder(order: OrdersResponse) {
    let data;
    let failedRemarks: string;

    switch (order.status) {
      case OrderStatus.FILLED:
        const amountReceived = Number(order.cummulativeQuoteQty);
        data = {
          status: SettlementTransactionProcessStatus.SUCCESS,
          amountReceived: amountReceived.toString(),
        };
        break;

      case OrderStatus.REJECTED:
        data = {
          status: SettlementTransactionProcessStatus.FAILED,
        };
        failedRemarks = 'Order Rejected From Exchange';

        break;
      case OrderStatus.EXPIRED:
      case OrderStatus.EXPIRED_IN_MATCH:
        data = {
          status: SettlementTransactionProcessStatus.FAILED,
        };
        failedRemarks = 'Order Rejected From Exchange';
        break;
    }

    if (data) {
      try {
        const resp = await this.prisma.settlementTransaction.update({
          where: {
            orderId: order.orderId.toString(),
            status: {
              not: data.status,
            },
          },
          data: {
            ...data,
          },
        });

        return { ...resp, failedRemarks };
      } catch (err) {}
    }
  }

  async handleOrdersStatus(binanceClient: Spot) {
    const records = await this.prisma.binanceIncomingTxn.findMany({
      where: {
        status: 'SETTLEMENT_INITIALZED',
      },
      include: {
        settlementTransaction: true,
        whitelabelIncomingTransaction: true,
      },
    });
    const btcOrders = [];

    for (const record of records) {
      try {
        const order = await binanceClient.getOrder(
          `${record.paidCurrency}USDT`,
          {
            orderId: Number(record.settlementTransaction.orderId),
          },
        );
        const settlementTxn = await this.manageOrder(order);
        if (settlementTxn) {
          if (
            settlementTxn.status === 'SUCCESS' &&
            (record.network === 'BTC' || record.network === 'SEGWITBTC')
          ) {
            btcOrders.push({
              senderAddress: record.senderAddress,
              txnHash: record.txnHash,
            });
          }

          await this.prisma.binanceIncomingTxn.update({
            data: {
              status:
                settlementTxn.status === 'SUCCESS' ? 'COMPLETED' : 'FAILED',
              failedRemarks: settlementTxn.failedRemarks,
            },
            where: {
              id: record.id,
            },
            select: {
              id: true,
            },
          });
        }
      } catch (Err) {
        console.log('handleOrdersStatus', Err);
      }
    }
    await this.handleBTCTxnsFinalizedOrders(btcOrders);
  }

  async handleBTCTxnsFinalizedOrders(
    btcOrders: { senderAddress: string; txnHash: string }[],
  ) {
    for (const order of btcOrders) {
      const btcAddressRecord = await this.prisma.userBTCAddress.findFirst({
        where: {
          address: order.senderAddress.toLowerCase(),
        },
        select: {
          userId: true,
          whitelabelId: true,
        },
      });

      if (btcAddressRecord) {
        await this.prisma.whitelabelIncomingTransaction.create({
          data: {
            userId: btcAddressRecord.userId,
            whitelabelId: btcAddressRecord.whitelabelId,
            provisionTxnHash: order.txnHash,
          },
          select: {
            id: true,
          },
        });
      }
    }
  }

  async handle(lastSyncedAt: number, binanceClient: Spot) {
    try {
      await this.handleUnInitializedOrders(binanceClient);
    } catch (err) {
      console.error('handleUnInitializedOrders', err);
    }

    try {
      await this.handleOrdersStatus(binanceClient);
    } catch (err) {
      console.error('handleOrdersStatus', err);
    }
  }
}
