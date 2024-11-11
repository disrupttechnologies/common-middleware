import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { KycStatus } from '../prisma/kyc-status.enum';

@ObjectType()
export class KYCUser {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => String, { nullable: false })
  userId!: string;

  @Field(() => String, { nullable: false })
  whitelabelId!: string;

  @Field(() => String, { nullable: true })
  kycApplicantId!: string | null;

  @Field(() => KycStatus, { nullable: false, defaultValue: 'NOT_INITIALIZED' })
  kycStatus!: keyof typeof KycStatus;

  @Field(() => String, { nullable: true })
  inspectionId!: string | null;

  @Field(() => String, { nullable: true })
  kycData!: string | null;

  @Field(() => String, { nullable: true })
  metadata!: string | null;
}
