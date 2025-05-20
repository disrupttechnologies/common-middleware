import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KYCDetailWhereUniqueInput } from '../kyc-detail/kyc-detail-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueKycDetailArgs {
  @Field(() => KYCDetailWhereUniqueInput, { nullable: false })
  @Type(() => KYCDetailWhereUniqueInput)
  where!: KYCDetailWhereUniqueInput;
}
