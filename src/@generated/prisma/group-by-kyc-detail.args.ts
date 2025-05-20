import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KYCDetailWhereInput } from '../kyc-detail/kyc-detail-where.input';
import { Type } from 'class-transformer';
import { KYCDetailOrderByWithAggregationInput } from '../kyc-detail/kyc-detail-order-by-with-aggregation.input';
import { KYCDetailScalarFieldEnum } from '../kyc-detail/kyc-detail-scalar-field.enum';
import { KYCDetailScalarWhereWithAggregatesInput } from '../kyc-detail/kyc-detail-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByKycDetailArgs {
  @Field(() => KYCDetailWhereInput, { nullable: true })
  @Type(() => KYCDetailWhereInput)
  where?: KYCDetailWhereInput;

  @Field(() => [KYCDetailOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<KYCDetailOrderByWithAggregationInput>;

  @Field(() => [KYCDetailScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof KYCDetailScalarFieldEnum>;

  @Field(() => KYCDetailScalarWhereWithAggregatesInput, { nullable: true })
  having?: KYCDetailScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
