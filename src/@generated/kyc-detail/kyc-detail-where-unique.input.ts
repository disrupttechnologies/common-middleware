import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KYCDetailWhereInput } from './kyc-detail-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumKycStatusFilter } from '../prisma/enum-kyc-status-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumKYCStageFilter } from '../prisma/enum-kyc-stage-filter.input';

@InputType()
export class KYCDetailWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    kycApplicantId?: string;

    @Field(() => [KYCDetailWhereInput], {nullable:true})
    AND?: Array<KYCDetailWhereInput>;

    @Field(() => [KYCDetailWhereInput], {nullable:true})
    OR?: Array<KYCDetailWhereInput>;

    @Field(() => [KYCDetailWhereInput], {nullable:true})
    NOT?: Array<KYCDetailWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => EnumKycStatusFilter, {nullable:true})
    kycStatus?: EnumKycStatusFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    failedRemarks?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    docsMetadata?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userMetadata?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    whitelabelId?: StringFilter;

    @Field(() => EnumKYCStageFilter, {nullable:true})
    kycStage?: EnumKYCStageFilter;
}
