import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BinanceIncomingTxnWhereInput } from './binance-incoming-txn-where.input';
import { Type } from 'class-transformer';
import { BinanceIncomingTxnOrderByWithRelationInput } from './binance-incoming-txn-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BinanceIncomingTxnWhereUniqueInput } from './binance-incoming-txn-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BinanceIncomingTxnCountAggregateInput } from './binance-incoming-txn-count-aggregate.input';
import { BinanceIncomingTxnMinAggregateInput } from './binance-incoming-txn-min-aggregate.input';
import { BinanceIncomingTxnMaxAggregateInput } from './binance-incoming-txn-max-aggregate.input';

@ArgsType()
export class BinanceIncomingTxnAggregateArgs {
  @Field(() => BinanceIncomingTxnWhereInput, { nullable: true })
  @Type(() => BinanceIncomingTxnWhereInput)
  where?: BinanceIncomingTxnWhereInput;

  @Field(() => [BinanceIncomingTxnOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BinanceIncomingTxnOrderByWithRelationInput>;

  @Field(() => BinanceIncomingTxnWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    BinanceIncomingTxnWhereUniqueInput,
    'id' | 'txnHash' | 'binanceTxnId' | 'settlementTransactionId'
  >;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => BinanceIncomingTxnCountAggregateInput, { nullable: true })
  _count?: BinanceIncomingTxnCountAggregateInput;

  @Field(() => BinanceIncomingTxnMinAggregateInput, { nullable: true })
  _min?: BinanceIncomingTxnMinAggregateInput;

  @Field(() => BinanceIncomingTxnMaxAggregateInput, { nullable: true })
  _max?: BinanceIncomingTxnMaxAggregateInput;
}
