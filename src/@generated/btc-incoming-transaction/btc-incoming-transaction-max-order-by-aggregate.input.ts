import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BTCIncomingTransactionMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  txnHash?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  binanceTxnId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  txnTime?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  amount?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  senderAddress?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  txnStatus?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  failedRemarks?: keyof typeof SortOrder;
}
