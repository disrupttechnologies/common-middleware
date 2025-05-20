import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserBTCAddressCreateWithoutTxnsInput } from './user-btc-address-create-without-txns.input';
import { Type } from 'class-transformer';
import { UserBTCAddressCreateOrConnectWithoutTxnsInput } from './user-btc-address-create-or-connect-without-txns.input';
import { UserBTCAddressUpsertWithoutTxnsInput } from './user-btc-address-upsert-without-txns.input';
import { Prisma } from '@prisma/client';
import { UserBTCAddressWhereUniqueInput } from './user-btc-address-where-unique.input';
import { UserBTCAddressUpdateToOneWithWhereWithoutTxnsInput } from './user-btc-address-update-to-one-with-where-without-txns.input';

@InputType()
export class UserBTCAddressUpdateOneRequiredWithoutTxnsNestedInput {

    @Field(() => UserBTCAddressCreateWithoutTxnsInput, {nullable:true})
    @Type(() => UserBTCAddressCreateWithoutTxnsInput)
    create?: UserBTCAddressCreateWithoutTxnsInput;

    @Field(() => UserBTCAddressCreateOrConnectWithoutTxnsInput, {nullable:true})
    @Type(() => UserBTCAddressCreateOrConnectWithoutTxnsInput)
    connectOrCreate?: UserBTCAddressCreateOrConnectWithoutTxnsInput;

    @Field(() => UserBTCAddressUpsertWithoutTxnsInput, {nullable:true})
    @Type(() => UserBTCAddressUpsertWithoutTxnsInput)
    upsert?: UserBTCAddressUpsertWithoutTxnsInput;

    @Field(() => UserBTCAddressWhereUniqueInput, {nullable:true})
    @Type(() => UserBTCAddressWhereUniqueInput)
    connect?: Prisma.AtLeast<UserBTCAddressWhereUniqueInput, 'id' | 'address'>;

    @Field(() => UserBTCAddressUpdateToOneWithWhereWithoutTxnsInput, {nullable:true})
    @Type(() => UserBTCAddressUpdateToOneWithWhereWithoutTxnsInput)
    update?: UserBTCAddressUpdateToOneWithWhereWithoutTxnsInput;
}
