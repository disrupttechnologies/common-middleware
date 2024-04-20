import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BTCSettlementTransactionCountAggregate } from './btc-settlement-transaction-count-aggregate.output';
import { BTCSettlementTransactionMinAggregate } from './btc-settlement-transaction-min-aggregate.output';
import { BTCSettlementTransactionMaxAggregate } from './btc-settlement-transaction-max-aggregate.output';

@ObjectType()
export class AggregateBTCSettlementTransaction {

    @Field(() => BTCSettlementTransactionCountAggregate, {nullable:true})
    _count?: BTCSettlementTransactionCountAggregate;

    @Field(() => BTCSettlementTransactionMinAggregate, {nullable:true})
    _min?: BTCSettlementTransactionMinAggregate;

    @Field(() => BTCSettlementTransactionMaxAggregate, {nullable:true})
    _max?: BTCSettlementTransactionMaxAggregate;
}
