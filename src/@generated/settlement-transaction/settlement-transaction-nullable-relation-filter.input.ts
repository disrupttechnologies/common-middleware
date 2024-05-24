import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementTransactionWhereInput } from './settlement-transaction-where.input';

@InputType()
export class SettlementTransactionNullableRelationFilter {
  @Field(() => SettlementTransactionWhereInput, { nullable: true })
  is?: SettlementTransactionWhereInput;

  @Field(() => SettlementTransactionWhereInput, { nullable: true })
  isNot?: SettlementTransactionWhereInput;
}
