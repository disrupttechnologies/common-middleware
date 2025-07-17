import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KYCUserWhereUniqueInput } from '../kyc-user/kyc-user-where-unique.input';
import { Type } from 'class-transformer';
import { KYCUserCreateInput } from '../kyc-user/kyc-user-create.input';
import { KYCUserUpdateInput } from '../kyc-user/kyc-user-update.input';

@ArgsType()
export class UpsertOneKycUserArgs {

    @Field(() => KYCUserWhereUniqueInput, {nullable:false})
    @Type(() => KYCUserWhereUniqueInput)
    where!: KYCUserWhereUniqueInput;

    @Field(() => KYCUserCreateInput, {nullable:false})
    @Type(() => KYCUserCreateInput)
    create!: KYCUserCreateInput;

    @Field(() => KYCUserUpdateInput, {nullable:false})
    @Type(() => KYCUserUpdateInput)
    update!: KYCUserUpdateInput;
}
