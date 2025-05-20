import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BTCTxnProcessStatus } from '../prisma/btc-txn-process-status.enum';
import { BTCSettlementTransactionCountAggregate } from './btc-settlement-transaction-count-aggregate.output';
import { BTCSettlementTransactionMinAggregate } from './btc-settlement-transaction-min-aggregate.output';
import { BTCSettlementTransactionMaxAggregate } from './btc-settlement-transaction-max-aggregate.output';

@ObjectType()
export class BTCSettlementTransactionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    incomingTxnId!: string;

    @Field(() => String, {nullable:true})
    orderId?: string;

    @Field(() => Date, {nullable:true})
    orderplaceTime?: Date | string;

    @Field(() => String, {nullable:true})
    amountReceivedInUSD?: string;

    @Field(() => BTCTxnProcessStatus, {nullable:false})
    status!: keyof typeof BTCTxnProcessStatus;

    @Field(() => String, {nullable:true})
    failedRemarks?: string;

    @Field(() => BTCSettlementTransactionCountAggregate, {nullable:true})
    _count?: BTCSettlementTransactionCountAggregate;

    @Field(() => BTCSettlementTransactionMinAggregate, {nullable:true})
    _min?: BTCSettlementTransactionMinAggregate;

    @Field(() => BTCSettlementTransactionMaxAggregate, {nullable:true})
    _max?: BTCSettlementTransactionMaxAggregate;
}
