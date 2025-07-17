import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BinanceIncomingTxnWhereInput } from './binance-incoming-txn-where.input';
import { Type } from 'class-transformer';
import { BinanceIncomingTxnOrderByWithAggregationInput } from './binance-incoming-txn-order-by-with-aggregation.input';
import { BinanceIncomingTxnScalarFieldEnum } from './binance-incoming-txn-scalar-field.enum';
import { BinanceIncomingTxnScalarWhereWithAggregatesInput } from './binance-incoming-txn-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BinanceIncomingTxnCountAggregateInput } from './binance-incoming-txn-count-aggregate.input';
import { BinanceIncomingTxnMinAggregateInput } from './binance-incoming-txn-min-aggregate.input';
import { BinanceIncomingTxnMaxAggregateInput } from './binance-incoming-txn-max-aggregate.input';

@ArgsType()
export class BinanceIncomingTxnGroupByArgs {

    @Field(() => BinanceIncomingTxnWhereInput, {nullable:true})
    @Type(() => BinanceIncomingTxnWhereInput)
    where?: BinanceIncomingTxnWhereInput;

    @Field(() => [BinanceIncomingTxnOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BinanceIncomingTxnOrderByWithAggregationInput>;

    @Field(() => [BinanceIncomingTxnScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BinanceIncomingTxnScalarFieldEnum>;

    @Field(() => BinanceIncomingTxnScalarWhereWithAggregatesInput, {nullable:true})
    having?: BinanceIncomingTxnScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BinanceIncomingTxnCountAggregateInput, {nullable:true})
    _count?: BinanceIncomingTxnCountAggregateInput;

    @Field(() => BinanceIncomingTxnMinAggregateInput, {nullable:true})
    _min?: BinanceIncomingTxnMinAggregateInput;

    @Field(() => BinanceIncomingTxnMaxAggregateInput, {nullable:true})
    _max?: BinanceIncomingTxnMaxAggregateInput;
}
