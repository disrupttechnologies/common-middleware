import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BTCIncomingTransactionCountAggregate } from './btc-incoming-transaction-count-aggregate.output';
import { BTCIncomingTransactionMinAggregate } from './btc-incoming-transaction-min-aggregate.output';
import { BTCIncomingTransactionMaxAggregate } from './btc-incoming-transaction-max-aggregate.output';

@ObjectType()
export class AggregateBTCIncomingTransaction {
  @Field(() => BTCIncomingTransactionCountAggregate, { nullable: true })
  _count?: BTCIncomingTransactionCountAggregate;

  @Field(() => BTCIncomingTransactionMinAggregate, { nullable: true })
  _min?: BTCIncomingTransactionMinAggregate;

  @Field(() => BTCIncomingTransactionMaxAggregate, { nullable: true })
  _max?: BTCIncomingTransactionMaxAggregate;
}
