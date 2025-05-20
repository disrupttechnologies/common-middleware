import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class WhitelabelIncomingTransactionMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  whitelabelId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  provisionTxnHash?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  settlementTransactionId?: keyof typeof SortOrder;
}
