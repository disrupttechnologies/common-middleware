import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { EnumSettlementTransactionProcessStatusWithAggregatesFilter } from '../prisma/enum-settlement-transaction-process-status-with-aggregates-filter.input';

@InputType()
export class SettlementTransactionScalarWhereWithAggregatesInput {

    @Field(() => [SettlementTransactionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SettlementTransactionScalarWhereWithAggregatesInput>;

    @Field(() => [SettlementTransactionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SettlementTransactionScalarWhereWithAggregatesInput>;

    @Field(() => [SettlementTransactionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SettlementTransactionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    orderId?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    orderplaceTime?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    amountReceived?: StringNullableWithAggregatesFilter;

    @Field(() => EnumSettlementTransactionProcessStatusWithAggregatesFilter, {nullable:true})
    status?: EnumSettlementTransactionProcessStatusWithAggregatesFilter;
}
