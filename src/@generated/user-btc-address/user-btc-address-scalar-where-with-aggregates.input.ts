import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class UserBTCAddressScalarWhereWithAggregatesInput {

    @Field(() => [UserBTCAddressScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserBTCAddressScalarWhereWithAggregatesInput>;

    @Field(() => [UserBTCAddressScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserBTCAddressScalarWhereWithAggregatesInput>;

    @Field(() => [UserBTCAddressScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserBTCAddressScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    address?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    whitelabelId?: StringWithAggregatesFilter;
}
