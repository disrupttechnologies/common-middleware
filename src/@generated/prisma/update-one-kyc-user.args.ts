import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KYCUserUpdateInput } from '../kyc-user/kyc-user-update.input';
import { Type } from 'class-transformer';
import { KYCUserWhereUniqueInput } from '../kyc-user/kyc-user-where-unique.input';

@ArgsType()
export class UpdateOneKycUserArgs {
  @Field(() => KYCUserUpdateInput, { nullable: false })
  @Type(() => KYCUserUpdateInput)
  data!: KYCUserUpdateInput;

  @Field(() => KYCUserWhereUniqueInput, { nullable: false })
  @Type(() => KYCUserWhereUniqueInput)
  where!: KYCUserWhereUniqueInput;
}
