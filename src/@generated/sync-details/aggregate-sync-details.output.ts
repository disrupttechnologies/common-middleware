import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SyncDetailsCountAggregate } from './sync-details-count-aggregate.output';
import { SyncDetailsMinAggregate } from './sync-details-min-aggregate.output';
import { SyncDetailsMaxAggregate } from './sync-details-max-aggregate.output';

@ObjectType()
export class AggregateSyncDetails {

    @Field(() => SyncDetailsCountAggregate, {nullable:true})
    _count?: SyncDetailsCountAggregate;

    @Field(() => SyncDetailsMinAggregate, {nullable:true})
    _min?: SyncDetailsMinAggregate;

    @Field(() => SyncDetailsMaxAggregate, {nullable:true})
    _max?: SyncDetailsMaxAggregate;
}
