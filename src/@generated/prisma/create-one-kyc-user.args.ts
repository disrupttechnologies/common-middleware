import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KYCUserCreateInput } from '../kyc-user/kyc-user-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneKycUserArgs {

    @Field(() => KYCUserCreateInput, {nullable:false})
    @Type(() => KYCUserCreateInput)
    data!: KYCUserCreateInput;
}
