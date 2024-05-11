import {
  OrderStatus,
  OrderType,
  RestTradeTypes,
  Side,
  Spot,
  TimeInForce,
} from '@binance/connector-typescript';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import moment from 'moment';
import { PrismaService } from 'nestjs-prisma';
import { BTCIncomingTransaction } from 'src/@generated/btc-incoming-transaction/btc-incoming-transaction.model';

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

@Injectable()
export class SOLOrderManagerService {
  private PAIRNAME: string = 'BTCUSDT';

  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {}

  async initSellOrder(record: BTCIncomingTransaction, binanceClient: Spot) {
    const options: RestTradeTypes.newOrderOptions = {
      // timeInForce: TimeInForce.GTC,
      quantity: Number(record.amount),
      newClientOrderId: record.id,
    };

    const resp = await binanceClient.newOrder(
      this.PAIRNAME,
      Side.SELL,
      OrderType.MARKET,
      options,
    );

    const { orderId, status, price, cummulativeQuoteQty, transactTime } = resp;
    let finalAmount = 0;
    if (status === OrderStatus.FILLED) {
      const amountReceived = Number(cummulativeQuoteQty);
      finalAmount = amountReceived;
    }
    await this.prisma.bTCSettlementTransaction.create({
      data: {
        incomingTxnId: record.id,
        orderId: orderId.toString(),
        orderplaceTime: moment(transactTime).toDate(),
        amountReceivedInUSD: finalAmount.toString(),
        status: status === OrderStatus.FILLED ? 'SUCCESS' : 'PENDING',
      },
    });
  }

  async handleUnInitializedOrders(binanceClient: Spot) {
    const records = await this.prisma.bTCIncomingTransaction.findMany({
      where: {
        settlementTxn: {
          is: null,
        },
        txnStatus:"SUCCESS"
      },
    });

    for (const record of records) {
      await this.initSellOrder(record, binanceClient);
    }
  }

  async manageOrder(order: OrdersResponse) {
    const where = { incomingTxnId: order.clientOrderId };
    switch (order.status) {
      case OrderStatus.FILLED:
        const amountReceived = Number(order.cummulativeQuoteQty);
        await this.prisma.bTCSettlementTransaction.update({
          where,
          data: {
            status: 'SUCCESS',
            amountReceivedInUSD: amountReceived.toString(),
          },
        });
        break;

      case OrderStatus.REJECTED:
        await this.prisma.bTCSettlementTransaction.update({
          where,
          data: {
            status: 'FAILED',
            failedRemarks: 'Order Rejected From Exchange',
          },
        });
        break;

      case OrderStatus.EXPIRED:
      case OrderStatus.EXPIRED_IN_MATCH:
        await this.prisma.bTCSettlementTransaction.update({
          where,
          data: {
            status: 'FAILED',
            failedRemarks: 'Order Expired On Exchange',
          },
        });
        break;
    }
  }

  async handleOrdersStatus(lastSyncedAt: number, binanceClient: Spot) {
    const options: RestTradeTypes.allOrdersOptions = {
      startTime: lastSyncedAt,
    };

    const orders = await binanceClient.allOrders(this.PAIRNAME, options);

    for (const order of orders) {
      if (order.side === Side.SELL) {
        try {
          await this.manageOrder(order);
        } catch (err) {
          console.error('handleOrdersStatus', err);
        }
      }
    }
  }

  async handle(lastSyncedAt: number, binanceClient: Spot) {
    await this.handleUnInitializedOrders(binanceClient);
    await this.handleOrdersStatus(lastSyncedAt, binanceClient);
  }
}
