import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { KYCUserCountAggregate } from './kyc-user-count-aggregate.output';
import { KYCUserMinAggregate } from './kyc-user-min-aggregate.output';
import { KYCUserMaxAggregate } from './kyc-user-max-aggregate.output';

@ObjectType()
export class AggregateKYCUser {

    @Field(() => KYCUserCountAggregate, {nullable:true})
    _count?: KYCUserCountAggregate;

    @Field(() => KYCUserMinAggregate, {nullable:true})
    _min?: KYCUserMinAggregate;

    @Field(() => KYCUserMaxAggregate, {nullable:true})
    _max?: KYCUserMaxAggregate;
}
