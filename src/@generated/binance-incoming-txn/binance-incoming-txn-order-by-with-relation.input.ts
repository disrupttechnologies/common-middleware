import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SettlementTransactionOrderByWithRelationInput } from '../settlement-transaction/settlement-transaction-order-by-with-relation.input';
import { WhitelabelIncomingTransactionOrderByWithRelationInput } from '../whitelabel-incoming-transaction/whitelabel-incoming-transaction-order-by-with-relation.input';

@InputType()
export class BinanceIncomingTxnOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  paidCurrency?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  amountInPaidCurrency?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  network?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  txnHash?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  senderAddress?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  binanceTxnId?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  status?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  settlementTransactionId?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  failedRemarks?: SortOrderInput;

  @Field(() => SettlementTransactionOrderByWithRelationInput, {
    nullable: true,
  })
  settlementTransaction?: SettlementTransactionOrderByWithRelationInput;

  @Field(() => WhitelabelIncomingTransactionOrderByWithRelationInput, {
    nullable: true,
  })
  whitelabelIncomingTransaction?: WhitelabelIncomingTransactionOrderByWithRelationInput;
}
