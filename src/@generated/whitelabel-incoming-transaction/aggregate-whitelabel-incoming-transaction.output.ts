import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WhitelabelIncomingTransactionCountAggregate } from './whitelabel-incoming-transaction-count-aggregate.output';
import { WhitelabelIncomingTransactionMinAggregate } from './whitelabel-incoming-transaction-min-aggregate.output';
import { WhitelabelIncomingTransactionMaxAggregate } from './whitelabel-incoming-transaction-max-aggregate.output';

@ObjectType()
export class AggregateWhitelabelIncomingTransaction {

    @Field(() => WhitelabelIncomingTransactionCountAggregate, {nullable:true})
    _count?: WhitelabelIncomingTransactionCountAggregate;

    @Field(() => WhitelabelIncomingTransactionMinAggregate, {nullable:true})
    _min?: WhitelabelIncomingTransactionMinAggregate;

    @Field(() => WhitelabelIncomingTransactionMaxAggregate, {nullable:true})
    _max?: WhitelabelIncomingTransactionMaxAggregate;
}
