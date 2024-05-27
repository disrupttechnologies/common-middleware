import { Spot } from '@binance/connector-typescript';
import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { createId } from '@paralleldrive/cuid2';
import { IncomingTxnStatus } from '@prisma/client';
import moment from 'moment';
import { PrismaService } from 'nestjs-prisma';
import {
  OrderDataType,
  OrderFinalizedEvent,
} from 'src/event-manager/event-manager.service';

interface DepositType {
  sourceAddress: any;
  id: string;
  amount: string;
  coin: string;
  network: string;
  status: number;
  address: string;
  addressTag: string;
  txId: string;
  insertTime: number;
  transferType: number;
  unlockConfirm: number;
  confirmTimes: string;
  walletType: number;
}

@Injectable()
export class BinanceIncomingTxnTrackerService {
  constructor(
    private readonly prisma: PrismaService,
    private eventEmitter: EventEmitter2,
  ) {}

  async saveRecords(records: DepositType[]) {
    const txns = [];

    for (const record of records) {
      let txnStatus: string;
      let error: string;
      switch (record.status) {
        case 0:
        case 6:
          txnStatus = 'PENDING';
          break;
        case 1:
          txnStatus = 'SUCCESS';
          break;
        case 7:
          txnStatus = 'FAILED';
          error = 'Wrong Deposit';
          break;
      }
      if (txnStatus === 'FAILED' || txnStatus === 'SUCCESS') {
        const data = {
          id: createId(),
          txnHash: record.txId.toLowerCase(),
          senderAddress: record.sourceAddress.toLowerCase(),
          // status:txnStatus === 'FAILED'
          //     ? IncomingTxnStatus.FAILED
          //     : IncomingTxnStatus.PAYMENT_RECEIVED,
          failedRemarks: error,
          binanceTxnId: record.id,
          amountInPaidCurrency: record.amount,
          paidCurrency: record.coin,
          network: record.network,
          settlementTransactionId: null,
          status: null,
        };

        if (txnStatus === 'SUCCESS' && record.coin === 'USDT') {
          const settlementRecord =
            await this.prisma.settlementTransaction.create({
              data: {
                orderId: (new Date().getTime() + Math.random()).toString(),
                orderplaceTime: new Date(),
                amountReceived: record.amount,
                status: 'SUCCESS',
              },
            });
          data.settlementTransactionId = settlementRecord.id;
          data.status = IncomingTxnStatus.COMPLETED;
        } else {
          data.status =
            txnStatus === 'FAILED'
              ? IncomingTxnStatus.FAILED
              : IncomingTxnStatus.PAYMENT_RECEIVED;
        }

        txns.push(data);
      }
    }

    if (txns.length > 0) {
      await this.prisma.binanceIncomingTxn.createMany({
        data: txns,
        skipDuplicates: true,
      });
    }
  }

  async fetchNewTxns(startTime: number, binanceClient: Spot) {
    const finaStartTime = moment(startTime)
      .subtract(1, 'hour')
      .toDate()
      .getTime();

    const options = {
      startTime: finaStartTime,
      includeSource: true,
    };
    const records = await binanceClient.depositHistory(options);
    await this.saveRecords(records as DepositType[]);
  }

  async linkTxns() {
    const orphanTxns = await this.prisma.whitelabelIncomingTransaction.findMany(
      {
        where: {
          settlementTransactionId: null,
        },
        select: {
          id: true,
          whitelabelId: true,
          provisionTxnHash: true,
        },
      },
    );

    const orphanTxnsProvisionHash = orphanTxns.map((item) => {
      return item.provisionTxnHash;
    });

    const binanceTxns = await this.prisma.binanceIncomingTxn.findMany({
      where: {
        txnHash: {
          in: orphanTxnsProvisionHash,
        },
        status: {
          in: ['COMPLETED', 'FAILED'],
        },
        settlementTransactionId: {
          not: null,
        },
      },
      include: {
        settlementTransaction: true,
      },
    });

    const finalData: OrderDataType[] = [];

    for (const txn of binanceTxns) {
      const record = await this.prisma.whitelabelIncomingTransaction.update({
        where: {
          provisionTxnHash: txn.txnHash,
        },
        data: {
          settlementTransactionId: txn.id,
        },
        select: {
          whitelabelId: true,
          userId: true,
        },
      });

      if (record.whitelabelId) {
        const payload = {
          txnHash: txn.txnHash,
          senderAddress: txn.senderAddress,
          network: txn.network,
          amountReceived: txn.amountInPaidCurrency,
          paidCurrency: txn.paidCurrency,
          status: txn.status,
          failedRemarks: txn.failedRemarks,
          usdtAmount: txn.settlementTransaction.amountReceived,
          whitelabelId: record.whitelabelId,
          userId: record.userId,
        };
        if (payload.status === 'COMPLETED') {
          finalData.push(payload);
        }
      }
    }

    if (finalData.length > 0) {
      this.eventEmitter.emit(
        'order.finalized',
        new OrderFinalizedEvent(finalData),
      );
    }
  }
  async handle(startTime: number, binanceClient: Spot) {
    await this.linkTxns();
    await this.fetchNewTxns(startTime, binanceClient);
  }
}
