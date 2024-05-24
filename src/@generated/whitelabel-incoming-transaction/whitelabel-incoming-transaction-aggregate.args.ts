import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WhitelabelIncomingTransactionWhereInput } from './whitelabel-incoming-transaction-where.input';
import { Type } from 'class-transformer';
import { WhitelabelIncomingTransactionOrderByWithRelationInput } from './whitelabel-incoming-transaction-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { WhitelabelIncomingTransactionWhereUniqueInput } from './whitelabel-incoming-transaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WhitelabelIncomingTransactionCountAggregateInput } from './whitelabel-incoming-transaction-count-aggregate.input';
import { WhitelabelIncomingTransactionMinAggregateInput } from './whitelabel-incoming-transaction-min-aggregate.input';
import { WhitelabelIncomingTransactionMaxAggregateInput } from './whitelabel-incoming-transaction-max-aggregate.input';

@ArgsType()
export class WhitelabelIncomingTransactionAggregateArgs {
  @Field(() => WhitelabelIncomingTransactionWhereInput, { nullable: true })
  @Type(() => WhitelabelIncomingTransactionWhereInput)
  where?: WhitelabelIncomingTransactionWhereInput;

  @Field(() => [WhitelabelIncomingTransactionOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: Array<WhitelabelIncomingTransactionOrderByWithRelationInput>;

  @Field(() => WhitelabelIncomingTransactionWhereUniqueInput, {
    nullable: true,
  })
  cursor?: Prisma.AtLeast<
    WhitelabelIncomingTransactionWhereUniqueInput,
    'id' | 'provisionTxnHash' | 'settlementTransactionId'
  >;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => WhitelabelIncomingTransactionCountAggregateInput, {
    nullable: true,
  })
  _count?: WhitelabelIncomingTransactionCountAggregateInput;

  @Field(() => WhitelabelIncomingTransactionMinAggregateInput, {
    nullable: true,
  })
  _min?: WhitelabelIncomingTransactionMinAggregateInput;

  @Field(() => WhitelabelIncomingTransactionMaxAggregateInput, {
    nullable: true,
  })
  _max?: WhitelabelIncomingTransactionMaxAggregateInput;
}
