import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KYCUserWhereInput } from './kyc-user-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumKycStatusFilter } from '../prisma/enum-kyc-status-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class KYCUserWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  userId?: string;

  @Field(() => String, { nullable: true })
  kycApplicantId?: string;

  @Field(() => String, { nullable: true })
  inspectionId?: string;

  @Field(() => [KYCUserWhereInput], { nullable: true })
  AND?: Array<KYCUserWhereInput>;

  @Field(() => [KYCUserWhereInput], { nullable: true })
  OR?: Array<KYCUserWhereInput>;

  @Field(() => [KYCUserWhereInput], { nullable: true })
  NOT?: Array<KYCUserWhereInput>;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  whitelabelId?: StringFilter;

  @Field(() => EnumKycStatusFilter, { nullable: true })
  kycStatus?: EnumKycStatusFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  kycData?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  metadata?: StringNullableFilter;
}
