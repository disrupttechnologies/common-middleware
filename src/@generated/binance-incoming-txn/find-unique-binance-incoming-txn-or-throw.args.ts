import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BinanceIncomingTxnWhereUniqueInput } from './binance-incoming-txn-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueBinanceIncomingTxnOrThrowArgs {
  @Field(() => BinanceIncomingTxnWhereUniqueInput, { nullable: false })
  @Type(() => BinanceIncomingTxnWhereUniqueInput)
  where!: Prisma.AtLeast<
    BinanceIncomingTxnWhereUniqueInput,
    'id' | 'txnHash' | 'binanceTxnId' | 'settlementTransactionId'
  >;
}
