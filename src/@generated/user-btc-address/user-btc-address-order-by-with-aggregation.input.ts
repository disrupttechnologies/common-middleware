import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserBTCAddressCountOrderByAggregateInput } from './user-btc-address-count-order-by-aggregate.input';
import { UserBTCAddressMaxOrderByAggregateInput } from './user-btc-address-max-order-by-aggregate.input';
import { UserBTCAddressMinOrderByAggregateInput } from './user-btc-address-min-order-by-aggregate.input';

@InputType()
export class UserBTCAddressOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    whitelabelId?: keyof typeof SortOrder;

    @Field(() => UserBTCAddressCountOrderByAggregateInput, {nullable:true})
    _count?: UserBTCAddressCountOrderByAggregateInput;

    @Field(() => UserBTCAddressMaxOrderByAggregateInput, {nullable:true})
    _max?: UserBTCAddressMaxOrderByAggregateInput;

    @Field(() => UserBTCAddressMinOrderByAggregateInput, {nullable:true})
    _min?: UserBTCAddressMinOrderByAggregateInput;
}
