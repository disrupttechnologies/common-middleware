import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TxnStatus } from '../prisma/txn-status.enum';
import { BTCIncomingTransactionCountAggregate } from './btc-incoming-transaction-count-aggregate.output';
import { BTCIncomingTransactionMinAggregate } from './btc-incoming-transaction-min-aggregate.output';
import { BTCIncomingTransactionMaxAggregate } from './btc-incoming-transaction-max-aggregate.output';

@ObjectType()
export class BTCIncomingTransactionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    txnHash!: string;

    @Field(() => String, {nullable:false})
    binanceTxnId!: string;

    @Field(() => Date, {nullable:false})
    txnTime!: Date | string;

    @Field(() => String, {nullable:false})
    amount!: string;

    @Field(() => String, {nullable:false})
    senderAddress!: string;

    @Field(() => TxnStatus, {nullable:false})
    txnStatus!: keyof typeof TxnStatus;

    @Field(() => String, {nullable:true})
    failedRemarks?: string;

    @Field(() => BTCIncomingTransactionCountAggregate, {nullable:true})
    _count?: BTCIncomingTransactionCountAggregate;

    @Field(() => BTCIncomingTransactionMinAggregate, {nullable:true})
    _min?: BTCIncomingTransactionMinAggregate;

    @Field(() => BTCIncomingTransactionMaxAggregate, {nullable:true})
    _max?: BTCIncomingTransactionMaxAggregate;
}
