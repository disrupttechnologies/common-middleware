import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserBTCAddressWhereUniqueInput } from '../user-btc-address/user-btc-address-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneUserBtcAddressArgs {

    @Field(() => UserBTCAddressWhereUniqueInput, {nullable:false})
    @Type(() => UserBTCAddressWhereUniqueInput)
    where!: UserBTCAddressWhereUniqueInput;
}
