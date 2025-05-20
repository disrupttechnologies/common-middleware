import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserBTCAddressWhereInput } from './user-btc-address-where.input';
import { Type } from 'class-transformer';
import { UserBTCAddressUpdateWithoutTxnsInput } from './user-btc-address-update-without-txns.input';

@InputType()
export class UserBTCAddressUpdateToOneWithWhereWithoutTxnsInput {

    @Field(() => UserBTCAddressWhereInput, {nullable:true})
    @Type(() => UserBTCAddressWhereInput)
    where?: UserBTCAddressWhereInput;

    @Field(() => UserBTCAddressUpdateWithoutTxnsInput, {nullable:false})
    @Type(() => UserBTCAddressUpdateWithoutTxnsInput)
    data!: UserBTCAddressUpdateWithoutTxnsInput;
}
