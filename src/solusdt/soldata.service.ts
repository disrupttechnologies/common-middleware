import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { BTCIncomingTransactionWhereInput } from 'src/@generated/btc-incoming-transaction/btc-incoming-transaction-where.input';
import { BTCIncomingTransaction } from 'src/@generated/btc-incoming-transaction/btc-incoming-transaction.model';

@Injectable()
export class SOLDataService {
  constructor(private readonly prisma: PrismaService) {}

  async getTransactionsByAddresses(
    whitelabelId: string,
    where: BTCIncomingTransactionWhereInput,
  ): Promise<BTCIncomingTransaction[]> {
    const records = await this.prisma.bTCIncomingTransaction.findMany({
      where: {
        ...where,
        settlementTxn: {
          isNot: null,
        },
        txnStatus: {
          not:"PENDING"
        },
        user: {
          whitelabelId: {
            equals: whitelabelId,
          },
        },
      },
      include: {
        settlementTxn: true,
        user:true
      },
    });
    return records;
  }
}
