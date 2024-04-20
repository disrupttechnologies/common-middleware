import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserBTCAddressWhereInput } from '../user-btc-address/user-btc-address-where.input';
import { Type } from 'class-transformer';
import { UserBTCAddressOrderByWithAggregationInput } from '../user-btc-address/user-btc-address-order-by-with-aggregation.input';
import { UserBTCAddressScalarFieldEnum } from '../user-btc-address/user-btc-address-scalar-field.enum';
import { UserBTCAddressScalarWhereWithAggregatesInput } from '../user-btc-address/user-btc-address-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByUserBtcAddressArgs {

    @Field(() => UserBTCAddressWhereInput, {nullable:true})
    @Type(() => UserBTCAddressWhereInput)
    where?: UserBTCAddressWhereInput;

    @Field(() => [UserBTCAddressOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserBTCAddressOrderByWithAggregationInput>;

    @Field(() => [UserBTCAddressScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserBTCAddressScalarFieldEnum>;

    @Field(() => UserBTCAddressScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserBTCAddressScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
