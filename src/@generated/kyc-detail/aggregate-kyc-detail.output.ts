import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { KYCDetailCountAggregate } from './kyc-detail-count-aggregate.output';
import { KYCDetailMinAggregate } from './kyc-detail-min-aggregate.output';
import { KYCDetailMaxAggregate } from './kyc-detail-max-aggregate.output';

@ObjectType()
export class AggregateKYCDetail {

    @Field(() => KYCDetailCountAggregate, {nullable:true})
    _count?: KYCDetailCountAggregate;

    @Field(() => KYCDetailMinAggregate, {nullable:true})
    _min?: KYCDetailMinAggregate;

    @Field(() => KYCDetailMaxAggregate, {nullable:true})
    _max?: KYCDetailMaxAggregate;
}
