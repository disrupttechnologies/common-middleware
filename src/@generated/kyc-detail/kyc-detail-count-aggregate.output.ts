import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class KYCDetailCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    kycStatus!: number;

    @Field(() => Int, {nullable:false})
    failedRemarks!: number;

    @Field(() => Int, {nullable:false})
    docsMetadata!: number;

    @Field(() => Int, {nullable:false})
    userMetadata!: number;

    @Field(() => Int, {nullable:false})
    whitelabelId!: number;

    @Field(() => Int, {nullable:false})
    kycApplicantId!: number;

    @Field(() => Int, {nullable:false})
    kycStage!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
