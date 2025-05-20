import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SettlementTransactionCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  createdAt!: number;

  @Field(() => Int, { nullable: false })
  updatedAt!: number;

  @Field(() => Int, { nullable: false })
  orderId!: number;

  @Field(() => Int, { nullable: false })
  orderplaceTime!: number;

  @Field(() => Int, { nullable: false })
  amountReceived!: number;

  @Field(() => Int, { nullable: false })
  status!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
