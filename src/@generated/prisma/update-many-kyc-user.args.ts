import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KYCUserUpdateManyMutationInput } from '../kyc-user/kyc-user-update-many-mutation.input';
import { Type } from 'class-transformer';
import { KYCUserWhereInput } from '../kyc-user/kyc-user-where.input';

@ArgsType()
export class UpdateManyKycUserArgs {
  @Field(() => KYCUserUpdateManyMutationInput, { nullable: false })
  @Type(() => KYCUserUpdateManyMutationInput)
  data!: KYCUserUpdateManyMutationInput;

  @Field(() => KYCUserWhereInput, { nullable: true })
  @Type(() => KYCUserWhereInput)
  where?: KYCUserWhereInput;
}
