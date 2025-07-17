import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BinanceIncomingTxnCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    paidCurrency!: number;

    @Field(() => Int, {nullable:false})
    amountInPaidCurrency!: number;

    @Field(() => Int, {nullable:false})
    network!: number;

    @Field(() => Int, {nullable:false})
    txnHash!: number;

    @Field(() => Int, {nullable:false})
    senderAddress!: number;

    @Field(() => Int, {nullable:false})
    binanceTxnId!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    settlementTransactionId!: number;

    @Field(() => Int, {nullable:false})
    failedRemarks!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
