import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BTCSettlementTransactionWhereInput } from '../btc-settlement-transaction/btc-settlement-transaction-where.input';
import { Type } from 'class-transformer';
import { BTCSettlementTransactionOrderByWithAggregationInput } from '../btc-settlement-transaction/btc-settlement-transaction-order-by-with-aggregation.input';
import { BTCSettlementTransactionScalarFieldEnum } from '../btc-settlement-transaction/btc-settlement-transaction-scalar-field.enum';
import { BTCSettlementTransactionScalarWhereWithAggregatesInput } from '../btc-settlement-transaction/btc-settlement-transaction-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByBtcSettlementTransactionArgs {

    @Field(() => BTCSettlementTransactionWhereInput, {nullable:true})
    @Type(() => BTCSettlementTransactionWhereInput)
    where?: BTCSettlementTransactionWhereInput;

    @Field(() => [BTCSettlementTransactionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BTCSettlementTransactionOrderByWithAggregationInput>;

    @Field(() => [BTCSettlementTransactionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BTCSettlementTransactionScalarFieldEnum>;

    @Field(() => BTCSettlementTransactionScalarWhereWithAggregatesInput, {nullable:true})
    having?: BTCSettlementTransactionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
