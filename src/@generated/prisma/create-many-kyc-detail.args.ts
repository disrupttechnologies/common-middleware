import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KYCDetailCreateManyInput } from '../kyc-detail/kyc-detail-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyKycDetailArgs {
  @Field(() => [KYCDetailCreateManyInput], { nullable: false })
  @Type(() => KYCDetailCreateManyInput)
  data!: Array<KYCDetailCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
