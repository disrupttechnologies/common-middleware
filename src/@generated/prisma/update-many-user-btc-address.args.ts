import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserBTCAddressUpdateManyMutationInput } from '../user-btc-address/user-btc-address-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserBTCAddressWhereInput } from '../user-btc-address/user-btc-address-where.input';

@ArgsType()
export class UpdateManyUserBtcAddressArgs {

    @Field(() => UserBTCAddressUpdateManyMutationInput, {nullable:false})
    @Type(() => UserBTCAddressUpdateManyMutationInput)
    data!: UserBTCAddressUpdateManyMutationInput;

    @Field(() => UserBTCAddressWhereInput, {nullable:true})
    @Type(() => UserBTCAddressWhereInput)
    where?: UserBTCAddressWhereInput;
}
