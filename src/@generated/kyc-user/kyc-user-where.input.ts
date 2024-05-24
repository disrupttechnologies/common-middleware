import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumKycStatusFilter } from '../prisma/enum-kyc-status-filter.input';

@InputType()
export class KYCUserWhereInput {
  @Field(() => [KYCUserWhereInput], { nullable: true })
  AND?: Array<KYCUserWhereInput>;

  @Field(() => [KYCUserWhereInput], { nullable: true })
  OR?: Array<KYCUserWhereInput>;

  @Field(() => [KYCUserWhereInput], { nullable: true })
  NOT?: Array<KYCUserWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  userId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  whitelabelId?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  kycApplicantId?: StringNullableFilter;

  @Field(() => EnumKycStatusFilter, { nullable: true })
  kycStatus?: EnumKycStatusFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  inspectionId?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  kycData?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  metadata?: StringNullableFilter;
}
