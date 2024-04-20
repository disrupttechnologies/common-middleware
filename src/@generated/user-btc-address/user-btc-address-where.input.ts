import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BTCIncomingTransactionListRelationFilter } from '../btc-incoming-transaction/btc-incoming-transaction-list-relation-filter.input';

@InputType()
export class UserBTCAddressWhereInput {

    @Field(() => [UserBTCAddressWhereInput], {nullable:true})
    AND?: Array<UserBTCAddressWhereInput>;

    @Field(() => [UserBTCAddressWhereInput], {nullable:true})
    OR?: Array<UserBTCAddressWhereInput>;

    @Field(() => [UserBTCAddressWhereInput], {nullable:true})
    NOT?: Array<UserBTCAddressWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    address?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    whitelabelId?: StringFilter;

    @Field(() => BTCIncomingTransactionListRelationFilter, {nullable:true})
    txns?: BTCIncomingTransactionListRelationFilter;
}
