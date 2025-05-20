import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BTCIncomingTransactionWhereUniqueInput } from './btc-incoming-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { BTCIncomingTransactionCreateWithoutSettlementTxnInput } from './btc-incoming-transaction-create-without-settlement-txn.input';

@InputType()
export class BTCIncomingTransactionCreateOrConnectWithoutSettlementTxnInput {
  @Field(() => BTCIncomingTransactionWhereUniqueInput, { nullable: false })
  @Type(() => BTCIncomingTransactionWhereUniqueInput)
  where!: Prisma.AtLeast<
    BTCIncomingTransactionWhereUniqueInput,
    'id' | 'txnHash' | 'binanceTxnId'
  >;

  @Field(() => BTCIncomingTransactionCreateWithoutSettlementTxnInput, {
    nullable: false,
  })
  @Type(() => BTCIncomingTransactionCreateWithoutSettlementTxnInput)
  create!: BTCIncomingTransactionCreateWithoutSettlementTxnInput;
}
