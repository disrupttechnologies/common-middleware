import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WhitelabelIncomingTransactionCreateWithoutSettlementTransactionInput } from './whitelabel-incoming-transaction-create-without-settlement-transaction.input';
import { Type } from 'class-transformer';
import { WhitelabelIncomingTransactionCreateOrConnectWithoutSettlementTransactionInput } from './whitelabel-incoming-transaction-create-or-connect-without-settlement-transaction.input';
import { WhitelabelIncomingTransactionUpsertWithoutSettlementTransactionInput } from './whitelabel-incoming-transaction-upsert-without-settlement-transaction.input';
import { WhitelabelIncomingTransactionWhereInput } from './whitelabel-incoming-transaction-where.input';
import { Prisma } from '@prisma/client';
import { WhitelabelIncomingTransactionWhereUniqueInput } from './whitelabel-incoming-transaction-where-unique.input';
import { WhitelabelIncomingTransactionUpdateToOneWithWhereWithoutSettlementTransactionInput } from './whitelabel-incoming-transaction-update-to-one-with-where-without-settlement-transaction.input';

@InputType()
export class WhitelabelIncomingTransactionUpdateOneWithoutSettlementTransactionNestedInput {
  @Field(
    () => WhitelabelIncomingTransactionCreateWithoutSettlementTransactionInput,
    { nullable: true },
  )
  @Type(
    () => WhitelabelIncomingTransactionCreateWithoutSettlementTransactionInput,
  )
  create?: WhitelabelIncomingTransactionCreateWithoutSettlementTransactionInput;

  @Field(
    () =>
      WhitelabelIncomingTransactionCreateOrConnectWithoutSettlementTransactionInput,
    { nullable: true },
  )
  @Type(
    () =>
      WhitelabelIncomingTransactionCreateOrConnectWithoutSettlementTransactionInput,
  )
  connectOrCreate?: WhitelabelIncomingTransactionCreateOrConnectWithoutSettlementTransactionInput;

  @Field(
    () => WhitelabelIncomingTransactionUpsertWithoutSettlementTransactionInput,
    { nullable: true },
  )
  @Type(
    () => WhitelabelIncomingTransactionUpsertWithoutSettlementTransactionInput,
  )
  upsert?: WhitelabelIncomingTransactionUpsertWithoutSettlementTransactionInput;

  @Field(() => WhitelabelIncomingTransactionWhereInput, { nullable: true })
  @Type(() => WhitelabelIncomingTransactionWhereInput)
  disconnect?: WhitelabelIncomingTransactionWhereInput;

  @Field(() => WhitelabelIncomingTransactionWhereInput, { nullable: true })
  @Type(() => WhitelabelIncomingTransactionWhereInput)
  delete?: WhitelabelIncomingTransactionWhereInput;

  @Field(() => WhitelabelIncomingTransactionWhereUniqueInput, {
    nullable: true,
  })
  @Type(() => WhitelabelIncomingTransactionWhereUniqueInput)
  connect?: Prisma.AtLeast<
    WhitelabelIncomingTransactionWhereUniqueInput,
    'id' | 'provisionTxnHash' | 'settlementTransactionId'
  >;

  @Field(
    () =>
      WhitelabelIncomingTransactionUpdateToOneWithWhereWithoutSettlementTransactionInput,
    { nullable: true },
  )
  @Type(
    () =>
      WhitelabelIncomingTransactionUpdateToOneWithWhereWithoutSettlementTransactionInput,
  )
  update?: WhitelabelIncomingTransactionUpdateToOneWithWhereWithoutSettlementTransactionInput;
}
