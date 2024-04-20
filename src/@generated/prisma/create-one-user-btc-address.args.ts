import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserBTCAddressCreateInput } from '../user-btc-address/user-btc-address-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserBtcAddressArgs {

    @Field(() => UserBTCAddressCreateInput, {nullable:false})
    @Type(() => UserBTCAddressCreateInput)
    data!: UserBTCAddressCreateInput;
}
