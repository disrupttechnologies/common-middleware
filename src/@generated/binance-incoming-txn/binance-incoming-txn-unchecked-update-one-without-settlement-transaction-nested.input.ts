import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BinanceIncomingTxnCreateWithoutSettlementTransactionInput } from './binance-incoming-txn-create-without-settlement-transaction.input';
import { Type } from 'class-transformer';
import { BinanceIncomingTxnCreateOrConnectWithoutSettlementTransactionInput } from './binance-incoming-txn-create-or-connect-without-settlement-transaction.input';
import { BinanceIncomingTxnUpsertWithoutSettlementTransactionInput } from './binance-incoming-txn-upsert-without-settlement-transaction.input';
import { BinanceIncomingTxnWhereInput } from './binance-incoming-txn-where.input';
import { Prisma } from '@prisma/client';
import { BinanceIncomingTxnWhereUniqueInput } from './binance-incoming-txn-where-unique.input';
import { BinanceIncomingTxnUpdateToOneWithWhereWithoutSettlementTransactionInput } from './binance-incoming-txn-update-to-one-with-where-without-settlement-transaction.input';

@InputType()
export class BinanceIncomingTxnUncheckedUpdateOneWithoutSettlementTransactionNestedInput {
  @Field(() => BinanceIncomingTxnCreateWithoutSettlementTransactionInput, {
    nullable: true,
  })
  @Type(() => BinanceIncomingTxnCreateWithoutSettlementTransactionInput)
  create?: BinanceIncomingTxnCreateWithoutSettlementTransactionInput;

  @Field(
    () => BinanceIncomingTxnCreateOrConnectWithoutSettlementTransactionInput,
    { nullable: true },
  )
  @Type(
    () => BinanceIncomingTxnCreateOrConnectWithoutSettlementTransactionInput,
  )
  connectOrCreate?: BinanceIncomingTxnCreateOrConnectWithoutSettlementTransactionInput;

  @Field(() => BinanceIncomingTxnUpsertWithoutSettlementTransactionInput, {
    nullable: true,
  })
  @Type(() => BinanceIncomingTxnUpsertWithoutSettlementTransactionInput)
  upsert?: BinanceIncomingTxnUpsertWithoutSettlementTransactionInput;

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
      BinanceIncomingTxnUpdateToOneWithWhereWithoutSettlementTransactionInput,
    { nullable: true },
  )
  @Type(
    () =>
      BinanceIncomingTxnUpdateToOneWithWhereWithoutSettlementTransactionInput,
  )
  update?: BinanceIncomingTxnUpdateToOneWithWhereWithoutSettlementTransactionInput;
}
