import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KYCUserWhereInput } from '../kyc-user/kyc-user-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyKycUserArgs {

    @Field(() => KYCUserWhereInput, {nullable:true})
    @Type(() => KYCUserWhereInput)
    where?: KYCUserWhereInput;
}
