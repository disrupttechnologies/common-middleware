import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BTCSettlementTransactionMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    incomingTxnId?: true;

    @Field(() => Boolean, {nullable:true})
    orderId?: true;

    @Field(() => Boolean, {nullable:true})
    orderplaceTime?: true;

    @Field(() => Boolean, {nullable:true})
    amountReceivedInUSD?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    failedRemarks?: true;
}
