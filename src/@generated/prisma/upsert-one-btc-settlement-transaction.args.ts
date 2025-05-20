import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BTCSettlementTransactionWhereUniqueInput } from '../btc-settlement-transaction/btc-settlement-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { BTCSettlementTransactionCreateInput } from '../btc-settlement-transaction/btc-settlement-transaction-create.input';
import { BTCSettlementTransactionUpdateInput } from '../btc-settlement-transaction/btc-settlement-transaction-update.input';

@ArgsType()
export class UpsertOneBtcSettlementTransactionArgs {
  @Field(() => BTCSettlementTransactionWhereUniqueInput, { nullable: false })
  @Type(() => BTCSettlementTransactionWhereUniqueInput)
  where!: BTCSettlementTransactionWhereUniqueInput;

  @Field(() => BTCSettlementTransactionCreateInput, { nullable: false })
  @Type(() => BTCSettlementTransactionCreateInput)
  create!: BTCSettlementTransactionCreateInput;

  @Field(() => BTCSettlementTransactionUpdateInput, { nullable: false })
  @Type(() => BTCSettlementTransactionUpdateInput)
  update!: BTCSettlementTransactionUpdateInput;
}
