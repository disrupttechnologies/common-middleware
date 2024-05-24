import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettlementTransactionWhereInput } from './settlement-transaction-where.input';
import { Type } from 'class-transformer';
import { SettlementTransactionOrderByWithAggregationInput } from './settlement-transaction-order-by-with-aggregation.input';
import { SettlementTransactionScalarFieldEnum } from './settlement-transaction-scalar-field.enum';
import { SettlementTransactionScalarWhereWithAggregatesInput } from './settlement-transaction-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SettlementTransactionCountAggregateInput } from './settlement-transaction-count-aggregate.input';
import { SettlementTransactionMinAggregateInput } from './settlement-transaction-min-aggregate.input';
import { SettlementTransactionMaxAggregateInput } from './settlement-transaction-max-aggregate.input';

@ArgsType()
export class SettlementTransactionGroupByArgs {
  @Field(() => SettlementTransactionWhereInput, { nullable: true })
  @Type(() => SettlementTransactionWhereInput)
  where?: SettlementTransactionWhereInput;

  @Field(() => [SettlementTransactionOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<SettlementTransactionOrderByWithAggregationInput>;

  @Field(() => [SettlementTransactionScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof SettlementTransactionScalarFieldEnum>;

  @Field(() => SettlementTransactionScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: SettlementTransactionScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => SettlementTransactionCountAggregateInput, { nullable: true })
  _count?: SettlementTransactionCountAggregateInput;

  @Field(() => SettlementTransactionMinAggregateInput, { nullable: true })
  _min?: SettlementTransactionMinAggregateInput;

  @Field(() => SettlementTransactionMaxAggregateInput, { nullable: true })
  _max?: SettlementTransactionMaxAggregateInput;
}
