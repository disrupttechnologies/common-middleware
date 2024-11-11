import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BTCSettlementTransactionWhereUniqueInput } from './btc-settlement-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { BTCSettlementTransactionCreateWithoutIncomingTxnInput } from './btc-settlement-transaction-create-without-incoming-txn.input';

@InputType()
export class BTCSettlementTransactionCreateOrConnectWithoutIncomingTxnInput {
  @Field(() => BTCSettlementTransactionWhereUniqueInput, { nullable: false })
  @Type(() => BTCSettlementTransactionWhereUniqueInput)
  where!: Prisma.AtLeast<
    BTCSettlementTransactionWhereUniqueInput,
    'id' | 'incomingTxnId' | 'orderId'
  >;

  @Field(() => BTCSettlementTransactionCreateWithoutIncomingTxnInput, {
    nullable: false,
  })
  @Type(() => BTCSettlementTransactionCreateWithoutIncomingTxnInput)
  create!: BTCSettlementTransactionCreateWithoutIncomingTxnInput;
}
