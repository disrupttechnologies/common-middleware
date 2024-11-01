import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserBTCAddressUpdateInput } from '../user-btc-address/user-btc-address-update.input';
import { Type } from 'class-transformer';
import { UserBTCAddressWhereUniqueInput } from '../user-btc-address/user-btc-address-where-unique.input';

@ArgsType()
export class UpdateOneUserBtcAddressArgs {

    @Field(() => UserBTCAddressUpdateInput, {nullable:false})
    @Type(() => UserBTCAddressUpdateInput)
    data!: UserBTCAddressUpdateInput;

    @Field(() => UserBTCAddressWhereUniqueInput, {nullable:false})
    @Type(() => UserBTCAddressWhereUniqueInput)
    where!: UserBTCAddressWhereUniqueInput;
}
