import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WhitelabelIncomingTransactionCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  createdAt!: number;

  @Field(() => Int, { nullable: false })
  updatedAt!: number;

  @Field(() => Int, { nullable: false })
  userId!: number;

  @Field(() => Int, { nullable: false })
  whitelabelId!: number;

  @Field(() => Int, { nullable: false })
  provisionTxnHash!: number;

  @Field(() => Int, { nullable: false })
  settlementTransactionId!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
