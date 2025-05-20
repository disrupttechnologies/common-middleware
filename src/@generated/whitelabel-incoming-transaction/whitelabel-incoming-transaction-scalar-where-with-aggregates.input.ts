import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class WhitelabelIncomingTransactionScalarWhereWithAggregatesInput {

    @Field(() => [WhitelabelIncomingTransactionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<WhitelabelIncomingTransactionScalarWhereWithAggregatesInput>;

    @Field(() => [WhitelabelIncomingTransactionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<WhitelabelIncomingTransactionScalarWhereWithAggregatesInput>;

    @Field(() => [WhitelabelIncomingTransactionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<WhitelabelIncomingTransactionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    whitelabelId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    provisionTxnHash?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    settlementTransactionId?: StringNullableWithAggregatesFilter;
}
