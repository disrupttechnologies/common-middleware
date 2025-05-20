import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WhitelabelIncomingTransactionUpdateWithoutSettlementTransactionInput } from './whitelabel-incoming-transaction-update-without-settlement-transaction.input';
import { Type } from 'class-transformer';
import { WhitelabelIncomingTransactionCreateWithoutSettlementTransactionInput } from './whitelabel-incoming-transaction-create-without-settlement-transaction.input';
import { WhitelabelIncomingTransactionWhereInput } from './whitelabel-incoming-transaction-where.input';

@InputType()
export class WhitelabelIncomingTransactionUpsertWithoutSettlementTransactionInput {
  @Field(
    () => WhitelabelIncomingTransactionUpdateWithoutSettlementTransactionInput,
    { nullable: false },
  )
  @Type(
    () => WhitelabelIncomingTransactionUpdateWithoutSettlementTransactionInput,
  )
  update!: WhitelabelIncomingTransactionUpdateWithoutSettlementTransactionInput;

  @Field(
    () => WhitelabelIncomingTransactionCreateWithoutSettlementTransactionInput,
    { nullable: false },
  )
  @Type(
    () => WhitelabelIncomingTransactionCreateWithoutSettlementTransactionInput,
  )
  create!: WhitelabelIncomingTransactionCreateWithoutSettlementTransactionInput;

  @Field(() => WhitelabelIncomingTransactionWhereInput, { nullable: true })
  @Type(() => WhitelabelIncomingTransactionWhereInput)
  where?: WhitelabelIncomingTransactionWhereInput;
}
