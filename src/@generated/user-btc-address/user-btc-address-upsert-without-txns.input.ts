import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserBTCAddressUpdateWithoutTxnsInput } from './user-btc-address-update-without-txns.input';
import { Type } from 'class-transformer';
import { UserBTCAddressCreateWithoutTxnsInput } from './user-btc-address-create-without-txns.input';
import { UserBTCAddressWhereInput } from './user-btc-address-where.input';

@InputType()
export class UserBTCAddressUpsertWithoutTxnsInput {

    @Field(() => UserBTCAddressUpdateWithoutTxnsInput, {nullable:false})
    @Type(() => UserBTCAddressUpdateWithoutTxnsInput)
    update!: UserBTCAddressUpdateWithoutTxnsInput;

    @Field(() => UserBTCAddressCreateWithoutTxnsInput, {nullable:false})
    @Type(() => UserBTCAddressCreateWithoutTxnsInput)
    create!: UserBTCAddressCreateWithoutTxnsInput;

    @Field(() => UserBTCAddressWhereInput, {nullable:true})
    @Type(() => UserBTCAddressWhereInput)
    where?: UserBTCAddressWhereInput;
}
