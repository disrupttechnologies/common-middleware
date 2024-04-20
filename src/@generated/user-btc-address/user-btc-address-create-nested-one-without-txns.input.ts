import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserBTCAddressCreateWithoutTxnsInput } from './user-btc-address-create-without-txns.input';
import { Type } from 'class-transformer';
import { UserBTCAddressCreateOrConnectWithoutTxnsInput } from './user-btc-address-create-or-connect-without-txns.input';
import { Prisma } from '@prisma/client';
import { UserBTCAddressWhereUniqueInput } from './user-btc-address-where-unique.input';

@InputType()
export class UserBTCAddressCreateNestedOneWithoutTxnsInput {

    @Field(() => UserBTCAddressCreateWithoutTxnsInput, {nullable:true})
    @Type(() => UserBTCAddressCreateWithoutTxnsInput)
    create?: UserBTCAddressCreateWithoutTxnsInput;

    @Field(() => UserBTCAddressCreateOrConnectWithoutTxnsInput, {nullable:true})
    @Type(() => UserBTCAddressCreateOrConnectWithoutTxnsInput)
    connectOrCreate?: UserBTCAddressCreateOrConnectWithoutTxnsInput;

    @Field(() => UserBTCAddressWhereUniqueInput, {nullable:true})
    @Type(() => UserBTCAddressWhereUniqueInput)
    connect?: Prisma.AtLeast<UserBTCAddressWhereUniqueInput, 'id' | 'address'>;
}
