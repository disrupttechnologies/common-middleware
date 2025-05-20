import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BinanceIncomingTxnCreateWithoutSettlementTransactionInput } from './binance-incoming-txn-create-without-settlement-transaction.input';
import { Type } from 'class-transformer';
import { BinanceIncomingTxnCreateOrConnectWithoutSettlementTransactionInput } from './binance-incoming-txn-create-or-connect-without-settlement-transaction.input';
import { Prisma } from '@prisma/client';
import { BinanceIncomingTxnWhereUniqueInput } from './binance-incoming-txn-where-unique.input';

@InputType()
export class BinanceIncomingTxnCreateNestedOneWithoutSettlementTransactionInput {
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

  @Field(() => BinanceIncomingTxnWhereUniqueInput, { nullable: true })
  @Type(() => BinanceIncomingTxnWhereUniqueInput)
  connect?: Prisma.AtLeast<
    BinanceIncomingTxnWhereUniqueInput,
    'id' | 'txnHash' | 'binanceTxnId' | 'settlementTransactionId'
  >;
}
