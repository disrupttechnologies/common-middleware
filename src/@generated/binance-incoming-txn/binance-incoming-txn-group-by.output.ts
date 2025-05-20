import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { IncomingTxnStatus } from '../prisma/incoming-txn-status.enum';
import { BinanceIncomingTxnCountAggregate } from './binance-incoming-txn-count-aggregate.output';
import { BinanceIncomingTxnMinAggregate } from './binance-incoming-txn-min-aggregate.output';
import { BinanceIncomingTxnMaxAggregate } from './binance-incoming-txn-max-aggregate.output';

@ObjectType()
export class BinanceIncomingTxnGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => String, { nullable: false })
  paidCurrency!: string;

  @Field(() => String, { nullable: false })
  amountInPaidCurrency!: string;

  @Field(() => String, { nullable: false })
  network!: string;

  @Field(() => String, { nullable: false })
  txnHash!: string;

  @Field(() => String, { nullable: false })
  senderAddress!: string;

  @Field(() => String, { nullable: false })
  binanceTxnId!: string;

  @Field(() => IncomingTxnStatus, { nullable: true })
  status?: keyof typeof IncomingTxnStatus;

  @Field(() => String, { nullable: true })
  settlementTransactionId?: string;

  @Field(() => String, { nullable: true })
  failedRemarks?: string;

  @Field(() => BinanceIncomingTxnCountAggregate, { nullable: true })
  _count?: BinanceIncomingTxnCountAggregate;

  @Field(() => BinanceIncomingTxnMinAggregate, { nullable: true })
  _min?: BinanceIncomingTxnMinAggregate;

  @Field(() => BinanceIncomingTxnMaxAggregate, { nullable: true })
  _max?: BinanceIncomingTxnMaxAggregate;
}
