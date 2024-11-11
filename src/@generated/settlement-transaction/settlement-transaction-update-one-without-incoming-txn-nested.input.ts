import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementTransactionCreateWithoutIncomingTxnInput } from './settlement-transaction-create-without-incoming-txn.input';
import { Type } from 'class-transformer';
import { SettlementTransactionCreateOrConnectWithoutIncomingTxnInput } from './settlement-transaction-create-or-connect-without-incoming-txn.input';
import { SettlementTransactionUpsertWithoutIncomingTxnInput } from './settlement-transaction-upsert-without-incoming-txn.input';
import { SettlementTransactionWhereInput } from './settlement-transaction-where.input';
import { Prisma } from '@prisma/client';
import { SettlementTransactionWhereUniqueInput } from './settlement-transaction-where-unique.input';
import { SettlementTransactionUpdateToOneWithWhereWithoutIncomingTxnInput } from './settlement-transaction-update-to-one-with-where-without-incoming-txn.input';

@InputType()
export class SettlementTransactionUpdateOneWithoutIncomingTxnNestedInput {
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

  @Field(() => SettlementTransactionUpsertWithoutIncomingTxnInput, {
    nullable: true,
  })
  @Type(() => SettlementTransactionUpsertWithoutIncomingTxnInput)
  upsert?: SettlementTransactionUpsertWithoutIncomingTxnInput;

  @Field(() => SettlementTransactionWhereInput, { nullable: true })
  @Type(() => SettlementTransactionWhereInput)
  disconnect?: SettlementTransactionWhereInput;

  @Field(() => SettlementTransactionWhereInput, { nullable: true })
  @Type(() => SettlementTransactionWhereInput)
  delete?: SettlementTransactionWhereInput;

  @Field(() => SettlementTransactionWhereUniqueInput, { nullable: true })
  @Type(() => SettlementTransactionWhereUniqueInput)
  connect?: Prisma.AtLeast<
    SettlementTransactionWhereUniqueInput,
    'id' | 'orderId'
  >;

  @Field(
    () => SettlementTransactionUpdateToOneWithWhereWithoutIncomingTxnInput,
    { nullable: true },
  )
  @Type(() => SettlementTransactionUpdateToOneWithWhereWithoutIncomingTxnInput)
  update?: SettlementTransactionUpdateToOneWithWhereWithoutIncomingTxnInput;
}
