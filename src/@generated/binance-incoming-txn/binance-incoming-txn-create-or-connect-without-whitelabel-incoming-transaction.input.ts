import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BinanceIncomingTxnWhereUniqueInput } from './binance-incoming-txn-where-unique.input';
import { Type } from 'class-transformer';
import { BinanceIncomingTxnCreateWithoutWhitelabelIncomingTransactionInput } from './binance-incoming-txn-create-without-whitelabel-incoming-transaction.input';

@InputType()
export class BinanceIncomingTxnCreateOrConnectWithoutWhitelabelIncomingTransactionInput {
  @Field(() => BinanceIncomingTxnWhereUniqueInput, { nullable: false })
  @Type(() => BinanceIncomingTxnWhereUniqueInput)
  where!: Prisma.AtLeast<
    BinanceIncomingTxnWhereUniqueInput,
    'id' | 'txnHash' | 'binanceTxnId' | 'settlementTransactionId'
  >;

  @Field(
    () => BinanceIncomingTxnCreateWithoutWhitelabelIncomingTransactionInput,
    { nullable: false },
  )
  @Type(() => BinanceIncomingTxnCreateWithoutWhitelabelIncomingTransactionInput)
  create!: BinanceIncomingTxnCreateWithoutWhitelabelIncomingTransactionInput;
}
