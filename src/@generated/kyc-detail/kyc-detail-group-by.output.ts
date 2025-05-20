import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { KycStatus } from '../prisma/kyc-status.enum';
import { KYCStage } from '../prisma/kyc-stage.enum';
import { KYCDetailCountAggregate } from './kyc-detail-count-aggregate.output';
import { KYCDetailMinAggregate } from './kyc-detail-min-aggregate.output';
import { KYCDetailMaxAggregate } from './kyc-detail-max-aggregate.output';

@ObjectType()
export class KYCDetailGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => String, { nullable: false })
  userId!: string;

  @Field(() => KycStatus, { nullable: false })
  kycStatus!: keyof typeof KycStatus;

  @Field(() => String, { nullable: true })
  failedRemarks?: string;

  @Field(() => String, { nullable: false })
  userMetadata!: string;

  @Field(() => String, { nullable: false })
  whitelabelId!: string;

  @Field(() => String, { nullable: true })
  kycApplicantId?: string;

  @Field(() => KYCStage, { nullable: false })
  kycStage!: keyof typeof KYCStage;

  @Field(() => KYCDetailCountAggregate, { nullable: true })
  _count?: KYCDetailCountAggregate;

  @Field(() => KYCDetailMinAggregate, { nullable: true })
  _min?: KYCDetailMinAggregate;

  @Field(() => KYCDetailMaxAggregate, { nullable: true })
  _max?: KYCDetailMaxAggregate;
}
