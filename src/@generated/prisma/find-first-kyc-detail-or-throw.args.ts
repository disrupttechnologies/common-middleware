import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KYCDetailWhereInput } from '../kyc-detail/kyc-detail-where.input';
import { Type } from 'class-transformer';
import { KYCDetailOrderByWithRelationInput } from '../kyc-detail/kyc-detail-order-by-with-relation.input';
import { KYCDetailWhereUniqueInput } from '../kyc-detail/kyc-detail-where-unique.input';
import { Int } from '@nestjs/graphql';
import { KYCDetailScalarFieldEnum } from '../kyc-detail/kyc-detail-scalar-field.enum';

@ArgsType()
export class FindFirstKycDetailOrThrowArgs {
  @Field(() => KYCDetailWhereInput, { nullable: true })
  @Type(() => KYCDetailWhereInput)
  where?: KYCDetailWhereInput;

  @Field(() => [KYCDetailOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<KYCDetailOrderByWithRelationInput>;

  @Field(() => KYCDetailWhereUniqueInput, { nullable: true })
  cursor?: KYCDetailWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [KYCDetailScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof KYCDetailScalarFieldEnum>;
}
