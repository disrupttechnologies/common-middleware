import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BTCIncomingTransactionCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    txnHash!: number;

    @Field(() => Int, {nullable:false})
    binanceTxnId!: number;

    @Field(() => Int, {nullable:false})
    txnTime!: number;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    senderAddress!: number;

    @Field(() => Int, {nullable:false})
    txnStatus!: number;

    @Field(() => Int, {nullable:false})
    failedRemarks!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
