import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumKycStatusWithAggregatesFilter } from '../prisma/enum-kyc-status-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumKYCStageWithAggregatesFilter } from '../prisma/enum-kyc-stage-with-aggregates-filter.input';

@InputType()
export class KYCDetailScalarWhereWithAggregatesInput {

    @Field(() => [KYCDetailScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<KYCDetailScalarWhereWithAggregatesInput>;

    @Field(() => [KYCDetailScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<KYCDetailScalarWhereWithAggregatesInput>;

    @Field(() => [KYCDetailScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<KYCDetailScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => EnumKycStatusWithAggregatesFilter, {nullable:true})
    kycStatus?: EnumKycStatusWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    failedRemarks?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userMetadata?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    whitelabelId?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    kycApplicantId?: StringNullableWithAggregatesFilter;

    @Field(() => EnumKYCStageWithAggregatesFilter, {nullable:true})
    kycStage?: EnumKYCStageWithAggregatesFilter;
}
