import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserBTCAddressWhereInput } from '../user-btc-address/user-btc-address-where.input';
import { Type } from 'class-transformer';
import { UserBTCAddressOrderByWithRelationInput } from '../user-btc-address/user-btc-address-order-by-with-relation.input';
import { UserBTCAddressWhereUniqueInput } from '../user-btc-address/user-btc-address-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserBTCAddressScalarFieldEnum } from '../user-btc-address/user-btc-address-scalar-field.enum';

@ArgsType()
export class FindManyUserBtcAddressArgs {

    @Field(() => UserBTCAddressWhereInput, {nullable:true})
    @Type(() => UserBTCAddressWhereInput)
    where?: UserBTCAddressWhereInput;

    @Field(() => [UserBTCAddressOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserBTCAddressOrderByWithRelationInput>;

    @Field(() => UserBTCAddressWhereUniqueInput, {nullable:true})
    cursor?: UserBTCAddressWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserBTCAddressScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserBTCAddressScalarFieldEnum>;
}
