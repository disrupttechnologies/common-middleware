import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BTCSettlementTransactionCountOrderByAggregateInput } from './btc-settlement-transaction-count-order-by-aggregate.input';
import { BTCSettlementTransactionMaxOrderByAggregateInput } from './btc-settlement-transaction-max-order-by-aggregate.input';
import { BTCSettlementTransactionMinOrderByAggregateInput } from './btc-settlement-transaction-min-order-by-aggregate.input';

@InputType()
export class BTCSettlementTransactionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    incomingTxnId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    orderId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    orderplaceTime?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    amountReceivedInUSD?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    failedRemarks?: SortOrderInput;

    @Field(() => BTCSettlementTransactionCountOrderByAggregateInput, {nullable:true})
    _count?: BTCSettlementTransactionCountOrderByAggregateInput;

    @Field(() => BTCSettlementTransactionMaxOrderByAggregateInput, {nullable:true})
    _max?: BTCSettlementTransactionMaxOrderByAggregateInput;

    @Field(() => BTCSettlementTransactionMinOrderByAggregateInput, {nullable:true})
    _min?: BTCSettlementTransactionMinOrderByAggregateInput;
}
