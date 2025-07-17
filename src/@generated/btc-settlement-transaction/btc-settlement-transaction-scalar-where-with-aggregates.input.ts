import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { EnumBTCTxnProcessStatusWithAggregatesFilter } from '../prisma/enum-btc-txn-process-status-with-aggregates-filter.input';

@InputType()
export class BTCSettlementTransactionScalarWhereWithAggregatesInput {

    @Field(() => [BTCSettlementTransactionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BTCSettlementTransactionScalarWhereWithAggregatesInput>;

    @Field(() => [BTCSettlementTransactionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BTCSettlementTransactionScalarWhereWithAggregatesInput>;

    @Field(() => [BTCSettlementTransactionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BTCSettlementTransactionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    incomingTxnId?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    orderId?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    orderplaceTime?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    amountReceivedInUSD?: StringNullableWithAggregatesFilter;

    @Field(() => EnumBTCTxnProcessStatusWithAggregatesFilter, {nullable:true})
    status?: EnumBTCTxnProcessStatusWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    failedRemarks?: StringNullableWithAggregatesFilter;
}
