import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumKycStatusFilter } from '../prisma/enum-kyc-status-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumKYCStageFilter } from '../prisma/enum-kyc-stage-filter.input';

@InputType()
export class KYCDetailWhereInput {

    @Field(() => [KYCDetailWhereInput], {nullable:true})
    AND?: Array<KYCDetailWhereInput>;

    @Field(() => [KYCDetailWhereInput], {nullable:true})
    OR?: Array<KYCDetailWhereInput>;

    @Field(() => [KYCDetailWhereInput], {nullable:true})
    NOT?: Array<KYCDetailWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => EnumKycStatusFilter, {nullable:true})
    kycStatus?: EnumKycStatusFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    failedRemarks?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    userMetadata?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    whitelabelId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    kycApplicantId?: StringNullableFilter;

    @Field(() => EnumKYCStageFilter, {nullable:true})
    kycStage?: EnumKYCStageFilter;
}
