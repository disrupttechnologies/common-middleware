import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KYCDetailWhereInput } from '../kyc-detail/kyc-detail-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyKycDetailArgs {
  @Field(() => KYCDetailWhereInput, { nullable: true })
  @Type(() => KYCDetailWhereInput)
  where?: KYCDetailWhereInput;
}
