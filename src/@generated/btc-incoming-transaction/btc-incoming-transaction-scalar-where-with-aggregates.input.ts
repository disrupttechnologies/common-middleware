import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumTxnStatusWithAggregatesFilter } from '../prisma/enum-txn-status-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class BTCIncomingTransactionScalarWhereWithAggregatesInput {

    @Field(() => [BTCIncomingTransactionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BTCIncomingTransactionScalarWhereWithAggregatesInput>;

    @Field(() => [BTCIncomingTransactionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BTCIncomingTransactionScalarWhereWithAggregatesInput>;

    @Field(() => [BTCIncomingTransactionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BTCIncomingTransactionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    txnHash?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    binanceTxnId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    txnTime?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    amount?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    senderAddress?: StringWithAggregatesFilter;

    @Field(() => EnumTxnStatusWithAggregatesFilter, {nullable:true})
    txnStatus?: EnumTxnStatusWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    failedRemarks?: StringNullableWithAggregatesFilter;
}
