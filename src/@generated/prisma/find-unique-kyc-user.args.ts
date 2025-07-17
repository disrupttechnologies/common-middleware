import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KYCUserWhereUniqueInput } from '../kyc-user/kyc-user-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueKycUserArgs {

    @Field(() => KYCUserWhereUniqueInput, {nullable:false})
    @Type(() => KYCUserWhereUniqueInput)
    where!: KYCUserWhereUniqueInput;
}
