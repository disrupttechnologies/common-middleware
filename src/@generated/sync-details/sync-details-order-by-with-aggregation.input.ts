import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SyncDetailsCountOrderByAggregateInput } from './sync-details-count-order-by-aggregate.input';
import { SyncDetailsMaxOrderByAggregateInput } from './sync-details-max-order-by-aggregate.input';
import { SyncDetailsMinOrderByAggregateInput } from './sync-details-min-order-by-aggregate.input';

@InputType()
export class SyncDetailsOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  lastSyncedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  actionName?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  metadata?: SortOrderInput;

  @Field(() => SyncDetailsCountOrderByAggregateInput, { nullable: true })
  _count?: SyncDetailsCountOrderByAggregateInput;

  @Field(() => SyncDetailsMaxOrderByAggregateInput, { nullable: true })
  _max?: SyncDetailsMaxOrderByAggregateInput;

  @Field(() => SyncDetailsMinOrderByAggregateInput, { nullable: true })
  _min?: SyncDetailsMinOrderByAggregateInput;
}
