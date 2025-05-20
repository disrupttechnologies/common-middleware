import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BTCSettlementTransactionUpdateInput } from '../btc-settlement-transaction/btc-settlement-transaction-update.input';
import { Type } from 'class-transformer';
import { BTCSettlementTransactionWhereUniqueInput } from '../btc-settlement-transaction/btc-settlement-transaction-where-unique.input';

@ArgsType()
export class UpdateOneBtcSettlementTransactionArgs {
  @Field(() => BTCSettlementTransactionUpdateInput, { nullable: false })
  @Type(() => BTCSettlementTransactionUpdateInput)
  data!: BTCSettlementTransactionUpdateInput;

  @Field(() => BTCSettlementTransactionWhereUniqueInput, { nullable: false })
  @Type(() => BTCSettlementTransactionWhereUniqueInput)
  where!: BTCSettlementTransactionWhereUniqueInput;
}
