import { Spot } from '@binance/connector-typescript';
import { Injectable } from '@nestjs/common';
import moment from 'moment';
import { PrismaService } from 'nestjs-prisma';

interface DepositType {
  id: string;
  insertTime: number;
  status: number;
  amount: string;
  txId: string;
  address: string;
}

@Injectable()
export class BTCIncomingTxnTrackerService {
  constructor(private readonly prisma: PrismaService) {}

  async saveRecords(records: DepositType[]) {
    const data = [];
    for (const record of records) {
      const btcAddress = await this.prisma.userBTCAddress.findFirst({
        where: {
          address: record['sourceAddress'].toLowerCase(),
        },
        select: {
          id: true,
        },
      });
      if (btcAddress) {
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
            txnStatus = 'ERROR';
            error = 'Wrong Deposit';
            break;
        }

        data.push({
          txnHash: record.txId.toLowerCase(),

          senderAddress: record['sourceAddress'].toLowerCase(),
          txnStatus: txnStatus,
          failedRemarks: error,
          binanceTxnId: record.id,
          txnTime: moment(record.insertTime).toDate(),
          amount: record.amount,
        });
      }
    }

    if (data.length > 0) {
      await this.prisma.bTCIncomingTransaction.createMany({
        data,
        skipDuplicates: true,
      });
    }
  }

  async settlePendingTxns(binanceClient: Spot) {
    const txns = await this.prisma.bTCIncomingTransaction.findMany({
      where: {
        txnStatus: 'PENDING',
      },
      select: {
        id: true,
        txnHash: true,
      },
    });

    for (const txn of txns) {
      try {
        const options = {
          coin: 'BTC',
          txId: txn.txnHash,
          includeSource: true,
        };
        const records = await binanceClient.depositHistory(options);
        if (records.length > 0) {
          if (records[0].status === 1) {
            await this.prisma.bTCIncomingTransaction.update({
              where: {
                txnHash: txn.txnHash,
              },
              data: {
                txnStatus: 'SUCCESS',
              },
            });
          }
        }
      } catch (err) {}
    }
  }

  async fetchNewTxns(startTime: number, binanceClient: Spot) {
    const finaStartTime = moment(startTime)
      .subtract(1, 'hour')
      .toDate()
      .getTime();

    const options = {
      coin: 'BTC',
      startTime: finaStartTime,

      includeSource: true,
    };
    const records = await binanceClient.depositHistory(options);
    await this.saveRecords(records);
  }
  async handle(startTime: number, binanceClient: Spot) {
    await this.settlePendingTxns(binanceClient);
    await this.fetchNewTxns(startTime, binanceClient);
  }
}
