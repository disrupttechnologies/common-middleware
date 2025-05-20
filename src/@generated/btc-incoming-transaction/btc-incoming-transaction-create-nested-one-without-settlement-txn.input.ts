import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BTCIncomingTransactionCreateWithoutSettlementTxnInput } from './btc-incoming-transaction-create-without-settlement-txn.input';
import { Type } from 'class-transformer';
import { BTCIncomingTransactionCreateOrConnectWithoutSettlementTxnInput } from './btc-incoming-transaction-create-or-connect-without-settlement-txn.input';
import { Prisma } from '@prisma/client';
import { BTCIncomingTransactionWhereUniqueInput } from './btc-incoming-transaction-where-unique.input';

@InputType()
export class BTCIncomingTransactionCreateNestedOneWithoutSettlementTxnInput {
  @Field(() => BTCIncomingTransactionCreateWithoutSettlementTxnInput, {
    nullable: true,
  })
  @Type(() => BTCIncomingTransactionCreateWithoutSettlementTxnInput)
  create?: BTCIncomingTransactionCreateWithoutSettlementTxnInput;

  @Field(() => BTCIncomingTransactionCreateOrConnectWithoutSettlementTxnInput, {
    nullable: true,
  })
  @Type(() => BTCIncomingTransactionCreateOrConnectWithoutSettlementTxnInput)
  connectOrCreate?: BTCIncomingTransactionCreateOrConnectWithoutSettlementTxnInput;

  @Field(() => BTCIncomingTransactionWhereUniqueInput, { nullable: true })
  @Type(() => BTCIncomingTransactionWhereUniqueInput)
  connect?: Prisma.AtLeast<
    BTCIncomingTransactionWhereUniqueInput,
    'id' | 'txnHash' | 'binanceTxnId'
  >;
}
