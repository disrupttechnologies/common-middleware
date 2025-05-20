import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WhitelabelIncomingTransactionCreateWithoutSettlementTransactionInput } from './whitelabel-incoming-transaction-create-without-settlement-transaction.input';
import { Type } from 'class-transformer';
import { WhitelabelIncomingTransactionCreateOrConnectWithoutSettlementTransactionInput } from './whitelabel-incoming-transaction-create-or-connect-without-settlement-transaction.input';
import { Prisma } from '@prisma/client';
import { WhitelabelIncomingTransactionWhereUniqueInput } from './whitelabel-incoming-transaction-where-unique.input';

@InputType()
export class WhitelabelIncomingTransactionCreateNestedOneWithoutSettlementTransactionInput {
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

  @Field(() => WhitelabelIncomingTransactionWhereUniqueInput, {
    nullable: true,
  })
  @Type(() => WhitelabelIncomingTransactionWhereUniqueInput)
  connect?: Prisma.AtLeast<
    WhitelabelIncomingTransactionWhereUniqueInput,
    'id' | 'provisionTxnHash' | 'settlementTransactionId'
  >;
}
