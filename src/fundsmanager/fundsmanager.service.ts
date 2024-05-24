import { Injectable } from '@nestjs/common';
import { CreateIncomingTxnsInput } from './dto/createincomingtxns.input';
import { PrismaService } from 'nestjs-prisma';
import { WhitelabelIncomingTransactionWhereInput } from 'src/@generated/whitelabel-incoming-transaction/whitelabel-incoming-transaction-where.input';

@Injectable()
export class FundsmanagerService {
  constructor(private readonly prisma: PrismaService) {}

  async createIncomingTxns(
    whitelabelId: string,
    data: CreateIncomingTxnsInput,
  ) {
    const items = data.data.map((item) => {
      return {
        ...item,
        provisionTxnHash: item.provisionTxnHash.toLowerCase(),
        whitelabelId: whitelabelId,
      };
    });

    await this.prisma.whitelabelIncomingTransaction.createMany({
      data: items,

      skipDuplicates: true,
    });

    return {
      message: 'success',
    };
  }

  getIncomingTxns(where: WhitelabelIncomingTransactionWhereInput) {
    return this.prisma.whitelabelIncomingTransaction.findMany({
      where,
      include: {
        settlementTransaction: true,
      },
    });
  }
}
