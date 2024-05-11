import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class KYCUserCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    whitelabelId!: number;

    @Field(() => Int, {nullable:false})
    kycApplicantId!: number;

    @Field(() => Int, {nullable:false})
    kycStatus!: number;

    @Field(() => Int, {nullable:false})
    inspectionId!: number;

    @Field(() => Int, {nullable:false})
    kycData!: number;

    @Field(() => Int, {nullable:false})
    metadata!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
