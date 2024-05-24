import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementTransactionCreateWithoutIncomingTxnInput } from './settlement-transaction-create-without-incoming-txn.input';
import { Type } from 'class-transformer';
import { SettlementTransactionCreateOrConnectWithoutIncomingTxnInput } from './settlement-transaction-create-or-connect-without-incoming-txn.input';
import { Prisma } from '@prisma/client';
import { SettlementTransactionWhereUniqueInput } from './settlement-transaction-where-unique.input';

@InputType()
export class SettlementTransactionCreateNestedOneWithoutIncomingTxnInput {
  @Field(() => SettlementTransactionCreateWithoutIncomingTxnInput, {
    nullable: true,
  })
  @Type(() => SettlementTransactionCreateWithoutIncomingTxnInput)
  create?: SettlementTransactionCreateWithoutIncomingTxnInput;

  @Field(() => SettlementTransactionCreateOrConnectWithoutIncomingTxnInput, {
    nullable: true,
  })
  @Type(() => SettlementTransactionCreateOrConnectWithoutIncomingTxnInput)
  connectOrCreate?: SettlementTransactionCreateOrConnectWithoutIncomingTxnInput;

  @Field(() => SettlementTransactionWhereUniqueInput, { nullable: true })
  @Type(() => SettlementTransactionWhereUniqueInput)
  connect?: Prisma.AtLeast<
    SettlementTransactionWhereUniqueInput,
    'id' | 'orderId'
  >;
}
