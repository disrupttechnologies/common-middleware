import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BinanceIncomingTxnCountOrderByAggregateInput } from './binance-incoming-txn-count-order-by-aggregate.input';
import { BinanceIncomingTxnMaxOrderByAggregateInput } from './binance-incoming-txn-max-order-by-aggregate.input';
import { BinanceIncomingTxnMinOrderByAggregateInput } from './binance-incoming-txn-min-order-by-aggregate.input';

@InputType()
export class BinanceIncomingTxnOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  paidCurrency?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  amountInPaidCurrency?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  network?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  txnHash?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  senderAddress?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  binanceTxnId?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  status?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  settlementTransactionId?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  failedRemarks?: SortOrderInput;

  @Field(() => BinanceIncomingTxnCountOrderByAggregateInput, { nullable: true })
  _count?: BinanceIncomingTxnCountOrderByAggregateInput;

  @Field(() => BinanceIncomingTxnMaxOrderByAggregateInput, { nullable: true })
  _max?: BinanceIncomingTxnMaxOrderByAggregateInput;

  @Field(() => BinanceIncomingTxnMinOrderByAggregateInput, { nullable: true })
  _min?: BinanceIncomingTxnMinOrderByAggregateInput;
}
