import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';

@InputType()
export class KYCDetailOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  kycStatus?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  failedRemarks?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  userMetadata?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  whitelabelId?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  kycApplicantId?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  kycStage?: keyof typeof SortOrder;
}
