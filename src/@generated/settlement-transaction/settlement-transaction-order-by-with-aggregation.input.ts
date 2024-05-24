import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SettlementTransactionCountOrderByAggregateInput } from './settlement-transaction-count-order-by-aggregate.input';
import { SettlementTransactionMaxOrderByAggregateInput } from './settlement-transaction-max-order-by-aggregate.input';
import { SettlementTransactionMinOrderByAggregateInput } from './settlement-transaction-min-order-by-aggregate.input';

@InputType()
export class SettlementTransactionOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  orderId?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  orderplaceTime?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  amountReceived?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;

  @Field(() => SettlementTransactionCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: SettlementTransactionCountOrderByAggregateInput;

  @Field(() => SettlementTransactionMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: SettlementTransactionMaxOrderByAggregateInput;

  @Field(() => SettlementTransactionMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: SettlementTransactionMinOrderByAggregateInput;
}
