import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SettlementTransactionWhereUniqueInput } from './settlement-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { SettlementTransactionCreateWithoutIncomingTxnInput } from './settlement-transaction-create-without-incoming-txn.input';

@InputType()
export class SettlementTransactionCreateOrConnectWithoutIncomingTxnInput {
  @Field(() => SettlementTransactionWhereUniqueInput, { nullable: false })
  @Type(() => SettlementTransactionWhereUniqueInput)
  where!: Prisma.AtLeast<
    SettlementTransactionWhereUniqueInput,
    'id' | 'orderId'
  >;

  @Field(() => SettlementTransactionCreateWithoutIncomingTxnInput, {
    nullable: false,
  })
  @Type(() => SettlementTransactionCreateWithoutIncomingTxnInput)
  create!: SettlementTransactionCreateWithoutIncomingTxnInput;
}
