import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BTCSettlementTransactionCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    incomingTxnId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderplaceTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amountReceivedInUSD?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    failedRemarks?: keyof typeof SortOrder;
}
