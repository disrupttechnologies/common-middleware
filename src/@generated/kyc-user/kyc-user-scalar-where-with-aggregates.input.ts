import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumKycStatusWithAggregatesFilter } from '../prisma/enum-kyc-status-with-aggregates-filter.input';

@InputType()
export class KYCUserScalarWhereWithAggregatesInput {

    @Field(() => [KYCUserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<KYCUserScalarWhereWithAggregatesInput>;

    @Field(() => [KYCUserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<KYCUserScalarWhereWithAggregatesInput>;

    @Field(() => [KYCUserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<KYCUserScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    whitelabelId?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    kycApplicantId?: StringNullableWithAggregatesFilter;

    @Field(() => EnumKycStatusWithAggregatesFilter, {nullable:true})
    kycStatus?: EnumKycStatusWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    inspectionId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    kycData?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    metadata?: StringNullableWithAggregatesFilter;
}
