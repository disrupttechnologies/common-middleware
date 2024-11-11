import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BTCIncomingTransactionOrderByRelationAggregateInput } from '../btc-incoming-transaction/btc-incoming-transaction-order-by-relation-aggregate.input';

@InputType()
export class UserBTCAddressOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  address?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  whitelabelId?: keyof typeof SortOrder;

  @Field(() => BTCIncomingTransactionOrderByRelationAggregateInput, {
    nullable: true,
  })
  txns?: BTCIncomingTransactionOrderByRelationAggregateInput;
}
