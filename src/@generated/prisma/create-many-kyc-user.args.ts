import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KYCUserCreateManyInput } from '../kyc-user/kyc-user-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyKycUserArgs {
  @Field(() => [KYCUserCreateManyInput], { nullable: false })
  @Type(() => KYCUserCreateManyInput)
  data!: Array<KYCUserCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
