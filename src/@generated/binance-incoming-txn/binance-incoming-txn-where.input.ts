import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumIncomingTxnStatusNullableFilter } from '../prisma/enum-incoming-txn-status-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { SettlementTransactionNullableRelationFilter } from '../settlement-transaction/settlement-transaction-nullable-relation-filter.input';
import { WhitelabelIncomingTransactionNullableRelationFilter } from '../whitelabel-incoming-transaction/whitelabel-incoming-transaction-nullable-relation-filter.input';

@InputType()
export class BinanceIncomingTxnWhereInput {

    @Field(() => [BinanceIncomingTxnWhereInput], {nullable:true})
    AND?: Array<BinanceIncomingTxnWhereInput>;

    @Field(() => [BinanceIncomingTxnWhereInput], {nullable:true})
    OR?: Array<BinanceIncomingTxnWhereInput>;

    @Field(() => [BinanceIncomingTxnWhereInput], {nullable:true})
    NOT?: Array<BinanceIncomingTxnWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    paidCurrency?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    amountInPaidCurrency?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    network?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    txnHash?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    senderAddress?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    binanceTxnId?: StringFilter;

    @Field(() => EnumIncomingTxnStatusNullableFilter, {nullable:true})
    status?: EnumIncomingTxnStatusNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    settlementTransactionId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    failedRemarks?: StringNullableFilter;

    @Field(() => SettlementTransactionNullableRelationFilter, {nullable:true})
    settlementTransaction?: SettlementTransactionNullableRelationFilter;

    @Field(() => WhitelabelIncomingTransactionNullableRelationFilter, {nullable:true})
    whitelabelIncomingTransaction?: WhitelabelIncomingTransactionNullableRelationFilter;
}
