import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { KycStatus } from '../prisma/kyc-status.enum';

@ObjectType()
export class KYCUserMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: true })
  userId?: string;

  @Field(() => String, { nullable: true })
  whitelabelId?: string;

  @Field(() => String, { nullable: true })
  kycApplicantId?: string;

  @Field(() => KycStatus, { nullable: true })
  kycStatus?: keyof typeof KycStatus;

  @Field(() => String, { nullable: true })
  inspectionId?: string;

  @Field(() => String, { nullable: true })
  kycData?: string;

  @Field(() => String, { nullable: true })
  metadata?: string;
}
