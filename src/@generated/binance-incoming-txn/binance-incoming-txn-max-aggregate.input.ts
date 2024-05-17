import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BinanceIncomingTxnMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    paidCurrency?: true;

    @Field(() => Boolean, {nullable:true})
    amountInPaidCurrency?: true;

    @Field(() => Boolean, {nullable:true})
    network?: true;

    @Field(() => Boolean, {nullable:true})
    txnHash?: true;

    @Field(() => Boolean, {nullable:true})
    senderAddress?: true;

    @Field(() => Boolean, {nullable:true})
    binanceTxnId?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    settlementTransactionId?: true;

    @Field(() => Boolean, {nullable:true})
    failedRemarks?: true;
}
