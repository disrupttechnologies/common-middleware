import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BTCIncomingTransactionCountOrderByAggregateInput } from './btc-incoming-transaction-count-order-by-aggregate.input';
import { BTCIncomingTransactionMaxOrderByAggregateInput } from './btc-incoming-transaction-max-order-by-aggregate.input';
import { BTCIncomingTransactionMinOrderByAggregateInput } from './btc-incoming-transaction-min-order-by-aggregate.input';

@InputType()
export class BTCIncomingTransactionOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  txnHash?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  binanceTxnId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  txnTime?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  amount?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  senderAddress?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  txnStatus?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  failedRemarks?: SortOrderInput;

  @Field(() => BTCIncomingTransactionCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: BTCIncomingTransactionCountOrderByAggregateInput;

  @Field(() => BTCIncomingTransactionMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: BTCIncomingTransactionMaxOrderByAggregateInput;

  @Field(() => BTCIncomingTransactionMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: BTCIncomingTransactionMinOrderByAggregateInput;
}
