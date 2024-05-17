import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementTransactionWhereInput } from './settlement-transaction-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumSettlementTransactionProcessStatusFilter } from '../prisma/enum-settlement-transaction-process-status-filter.input';
import { BinanceIncomingTxnNullableRelationFilter } from '../binance-incoming-txn/binance-incoming-txn-nullable-relation-filter.input';

@InputType()
export class SettlementTransactionWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    orderId?: string;

    @Field(() => [SettlementTransactionWhereInput], {nullable:true})
    AND?: Array<SettlementTransactionWhereInput>;

    @Field(() => [SettlementTransactionWhereInput], {nullable:true})
    OR?: Array<SettlementTransactionWhereInput>;

    @Field(() => [SettlementTransactionWhereInput], {nullable:true})
    NOT?: Array<SettlementTransactionWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    orderplaceTime?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    amountReceived?: StringNullableFilter;

    @Field(() => EnumSettlementTransactionProcessStatusFilter, {nullable:true})
    status?: EnumSettlementTransactionProcessStatusFilter;

    @Field(() => BinanceIncomingTxnNullableRelationFilter, {nullable:true})
    incomingTxn?: BinanceIncomingTxnNullableRelationFilter;
}
