import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BinanceIncomingTxnCountAggregate } from './binance-incoming-txn-count-aggregate.output';
import { BinanceIncomingTxnMinAggregate } from './binance-incoming-txn-min-aggregate.output';
import { BinanceIncomingTxnMaxAggregate } from './binance-incoming-txn-max-aggregate.output';

@ObjectType()
export class AggregateBinanceIncomingTxn {
  @Field(() => BinanceIncomingTxnCountAggregate, { nullable: true })
  _count?: BinanceIncomingTxnCountAggregate;

  @Field(() => BinanceIncomingTxnMinAggregate, { nullable: true })
  _min?: BinanceIncomingTxnMinAggregate;

  @Field(() => BinanceIncomingTxnMaxAggregate, { nullable: true })
  _max?: BinanceIncomingTxnMaxAggregate;
}
