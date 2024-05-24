import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BinanceIncomingTxnWhereUniqueInput } from './binance-incoming-txn-where-unique.input';
import { Type } from 'class-transformer';
import { BinanceIncomingTxnCreateWithoutSettlementTransactionInput } from './binance-incoming-txn-create-without-settlement-transaction.input';

@InputType()
export class BinanceIncomingTxnCreateOrConnectWithoutSettlementTransactionInput {
  @Field(() => BinanceIncomingTxnWhereUniqueInput, { nullable: false })
  @Type(() => BinanceIncomingTxnWhereUniqueInput)
  where!: Prisma.AtLeast<
    BinanceIncomingTxnWhereUniqueInput,
    'id' | 'txnHash' | 'binanceTxnId' | 'settlementTransactionId'
  >;

  @Field(() => BinanceIncomingTxnCreateWithoutSettlementTransactionInput, {
    nullable: false,
  })
  @Type(() => BinanceIncomingTxnCreateWithoutSettlementTransactionInput)
  create!: BinanceIncomingTxnCreateWithoutSettlementTransactionInput;
}
