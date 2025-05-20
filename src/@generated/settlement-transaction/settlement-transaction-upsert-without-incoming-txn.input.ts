import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementTransactionUpdateWithoutIncomingTxnInput } from './settlement-transaction-update-without-incoming-txn.input';
import { Type } from 'class-transformer';
import { SettlementTransactionCreateWithoutIncomingTxnInput } from './settlement-transaction-create-without-incoming-txn.input';
import { SettlementTransactionWhereInput } from './settlement-transaction-where.input';

@InputType()
export class SettlementTransactionUpsertWithoutIncomingTxnInput {
  @Field(() => SettlementTransactionUpdateWithoutIncomingTxnInput, {
    nullable: false,
  })
  @Type(() => SettlementTransactionUpdateWithoutIncomingTxnInput)
  update!: SettlementTransactionUpdateWithoutIncomingTxnInput;

  @Field(() => SettlementTransactionCreateWithoutIncomingTxnInput, {
    nullable: false,
  })
  @Type(() => SettlementTransactionCreateWithoutIncomingTxnInput)
  create!: SettlementTransactionCreateWithoutIncomingTxnInput;

  @Field(() => SettlementTransactionWhereInput, { nullable: true })
  @Type(() => SettlementTransactionWhereInput)
  where?: SettlementTransactionWhereInput;
}
