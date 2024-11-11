import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SettlementTransactionCountAggregate } from './settlement-transaction-count-aggregate.output';
import { SettlementTransactionMinAggregate } from './settlement-transaction-min-aggregate.output';
import { SettlementTransactionMaxAggregate } from './settlement-transaction-max-aggregate.output';

@ObjectType()
export class AggregateSettlementTransaction {
  @Field(() => SettlementTransactionCountAggregate, { nullable: true })
  _count?: SettlementTransactionCountAggregate;

  @Field(() => SettlementTransactionMinAggregate, { nullable: true })
  _min?: SettlementTransactionMinAggregate;

  @Field(() => SettlementTransactionMaxAggregate, { nullable: true })
  _max?: SettlementTransactionMaxAggregate;
}
