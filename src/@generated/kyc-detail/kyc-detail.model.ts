import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { KycStatus } from '../prisma/kyc-status.enum';
import { KYCStage } from '../prisma/kyc-stage.enum';

@ObjectType()
export class KYCDetail {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => KycStatus, {nullable:false,defaultValue:'NOT_INITIALIZED'})
    kycStatus!: keyof typeof KycStatus;

    @Field(() => String, {nullable:true})
    failedRemarks!: string | null;

    @Field(() => String, {nullable:false})
    userMetadata!: string;

    @Field(() => String, {nullable:false})
    whitelabelId!: string;

    @Field(() => String, {nullable:true})
    kycApplicantId!: string | null;

    @Field(() => KYCStage, {nullable:false,defaultValue:'NOT_INITIALIZED'})
    kycStage!: keyof typeof KYCStage;
}
