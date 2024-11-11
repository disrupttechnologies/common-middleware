import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BinanceIncomingTxnCreateWithoutWhitelabelIncomingTransactionInput } from './binance-incoming-txn-create-without-whitelabel-incoming-transaction.input';
import { Type } from 'class-transformer';
import { BinanceIncomingTxnCreateOrConnectWithoutWhitelabelIncomingTransactionInput } from './binance-incoming-txn-create-or-connect-without-whitelabel-incoming-transaction.input';
import { BinanceIncomingTxnUpsertWithoutWhitelabelIncomingTransactionInput } from './binance-incoming-txn-upsert-without-whitelabel-incoming-transaction.input';
import { BinanceIncomingTxnWhereInput } from './binance-incoming-txn-where.input';
import { Prisma } from '@prisma/client';
import { BinanceIncomingTxnWhereUniqueInput } from './binance-incoming-txn-where-unique.input';
import { BinanceIncomingTxnUpdateToOneWithWhereWithoutWhitelabelIncomingTransactionInput } from './binance-incoming-txn-update-to-one-with-where-without-whitelabel-incoming-transaction.input';

@InputType()
export class BinanceIncomingTxnUpdateOneWithoutWhitelabelIncomingTransactionNestedInput {
  @Field(
    () => BinanceIncomingTxnCreateWithoutWhitelabelIncomingTransactionInput,
    { nullable: true },
  )
  @Type(() => BinanceIncomingTxnCreateWithoutWhitelabelIncomingTransactionInput)
  create?: BinanceIncomingTxnCreateWithoutWhitelabelIncomingTransactionInput;

  @Field(
    () =>
      BinanceIncomingTxnCreateOrConnectWithoutWhitelabelIncomingTransactionInput,
    { nullable: true },
  )
  @Type(
    () =>
      BinanceIncomingTxnCreateOrConnectWithoutWhitelabelIncomingTransactionInput,
  )
  connectOrCreate?: BinanceIncomingTxnCreateOrConnectWithoutWhitelabelIncomingTransactionInput;

  @Field(
    () => BinanceIncomingTxnUpsertWithoutWhitelabelIncomingTransactionInput,
    { nullable: true },
  )
  @Type(() => BinanceIncomingTxnUpsertWithoutWhitelabelIncomingTransactionInput)
  upsert?: BinanceIncomingTxnUpsertWithoutWhitelabelIncomingTransactionInput;

  @Field(() => BinanceIncomingTxnWhereInput, { nullable: true })
  @Type(() => BinanceIncomingTxnWhereInput)
  disconnect?: BinanceIncomingTxnWhereInput;

  @Field(() => BinanceIncomingTxnWhereInput, { nullable: true })
  @Type(() => BinanceIncomingTxnWhereInput)
  delete?: BinanceIncomingTxnWhereInput;

  @Field(() => BinanceIncomingTxnWhereUniqueInput, { nullable: true })
  @Type(() => BinanceIncomingTxnWhereUniqueInput)
  connect?: Prisma.AtLeast<
    BinanceIncomingTxnWhereUniqueInput,
    'id' | 'txnHash' | 'binanceTxnId' | 'settlementTransactionId'
  >;

  @Field(
    () =>
      BinanceIncomingTxnUpdateToOneWithWhereWithoutWhitelabelIncomingTransactionInput,
    { nullable: true },
  )
  @Type(
    () =>
      BinanceIncomingTxnUpdateToOneWithWhereWithoutWhitelabelIncomingTransactionInput,
  )
  update?: BinanceIncomingTxnUpdateToOneWithWhereWithoutWhitelabelIncomingTransactionInput;
}
