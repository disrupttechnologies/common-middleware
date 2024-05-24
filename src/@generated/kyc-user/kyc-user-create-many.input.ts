import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KycStatus } from '../prisma/kyc-status.enum';

@InputType()
export class KYCUserCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: false })
  userId!: string;

  @Field(() => String, { nullable: false })
  whitelabelId!: string;

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
