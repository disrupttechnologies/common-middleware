import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { KycStatus } from '../prisma/kyc-status.enum';
import { KYCUserCountAggregate } from './kyc-user-count-aggregate.output';
import { KYCUserMinAggregate } from './kyc-user-min-aggregate.output';
import { KYCUserMaxAggregate } from './kyc-user-max-aggregate.output';

@ObjectType()
export class KYCUserGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    whitelabelId!: string;

    @Field(() => String, {nullable:true})
    kycApplicantId?: string;

    @Field(() => KycStatus, {nullable:false})
    kycStatus!: keyof typeof KycStatus;

    @Field(() => String, {nullable:true})
    inspectionId?: string;

    @Field(() => String, {nullable:true})
    kycData?: string;

    @Field(() => String, {nullable:true})
    metadata?: string;

    @Field(() => KYCUserCountAggregate, {nullable:true})
    _count?: KYCUserCountAggregate;

    @Field(() => KYCUserMinAggregate, {nullable:true})
    _min?: KYCUserMinAggregate;

    @Field(() => KYCUserMaxAggregate, {nullable:true})
    _max?: KYCUserMaxAggregate;
}
