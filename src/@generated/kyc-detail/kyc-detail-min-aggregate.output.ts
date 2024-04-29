import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { KycStatus } from '../prisma/kyc-status.enum';
import { KYCStage } from '../prisma/kyc-stage.enum';

@ObjectType()
export class KYCDetailMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => KycStatus, {nullable:true})
    kycStatus?: keyof typeof KycStatus;

    @Field(() => String, {nullable:true})
    failedRemarks?: string;

    @Field(() => String, {nullable:true})
    docsMetadata?: string;

    @Field(() => String, {nullable:true})
    userMetadata?: string;

    @Field(() => String, {nullable:true})
    whitelabelId?: string;

    @Field(() => String, {nullable:true})
    kycApplicantId?: string;

    @Field(() => KYCStage, {nullable:true})
    kycStage?: keyof typeof KYCStage;
}
