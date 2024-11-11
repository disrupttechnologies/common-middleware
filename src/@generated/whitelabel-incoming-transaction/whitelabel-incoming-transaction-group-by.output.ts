import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WhitelabelIncomingTransactionCountAggregate } from './whitelabel-incoming-transaction-count-aggregate.output';
import { WhitelabelIncomingTransactionMinAggregate } from './whitelabel-incoming-transaction-min-aggregate.output';
import { WhitelabelIncomingTransactionMaxAggregate } from './whitelabel-incoming-transaction-max-aggregate.output';

@ObjectType()
export class WhitelabelIncomingTransactionGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => String, { nullable: false })
  userId!: string;

  @Field(() => String, { nullable: false })
  whitelabelId!: string;

  @Field(() => String, { nullable: false })
  provisionTxnHash!: string;

  @Field(() => String, { nullable: true })
  settlementTransactionId?: string;

  @Field(() => WhitelabelIncomingTransactionCountAggregate, { nullable: true })
  _count?: WhitelabelIncomingTransactionCountAggregate;

  @Field(() => WhitelabelIncomingTransactionMinAggregate, { nullable: true })
  _min?: WhitelabelIncomingTransactionMinAggregate;

  @Field(() => WhitelabelIncomingTransactionMaxAggregate, { nullable: true })
  _max?: WhitelabelIncomingTransactionMaxAggregate;
}
