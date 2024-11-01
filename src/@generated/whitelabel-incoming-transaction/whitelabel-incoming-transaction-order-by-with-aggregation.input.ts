import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { WhitelabelIncomingTransactionCountOrderByAggregateInput } from './whitelabel-incoming-transaction-count-order-by-aggregate.input';
import { WhitelabelIncomingTransactionMaxOrderByAggregateInput } from './whitelabel-incoming-transaction-max-order-by-aggregate.input';
import { WhitelabelIncomingTransactionMinOrderByAggregateInput } from './whitelabel-incoming-transaction-min-order-by-aggregate.input';

@InputType()
export class WhitelabelIncomingTransactionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    whitelabelId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    provisionTxnHash?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    settlementTransactionId?: SortOrderInput;

    @Field(() => WhitelabelIncomingTransactionCountOrderByAggregateInput, {nullable:true})
    _count?: WhitelabelIncomingTransactionCountOrderByAggregateInput;

    @Field(() => WhitelabelIncomingTransactionMaxOrderByAggregateInput, {nullable:true})
    _max?: WhitelabelIncomingTransactionMaxOrderByAggregateInput;

    @Field(() => WhitelabelIncomingTransactionMinOrderByAggregateInput, {nullable:true})
    _min?: WhitelabelIncomingTransactionMinOrderByAggregateInput;
}
