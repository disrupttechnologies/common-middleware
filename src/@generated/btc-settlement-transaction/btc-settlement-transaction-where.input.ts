import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumBTCTxnProcessStatusFilter } from '../prisma/enum-btc-txn-process-status-filter.input';
import { BTCIncomingTransactionRelationFilter } from '../btc-incoming-transaction/btc-incoming-transaction-relation-filter.input';

@InputType()
export class BTCSettlementTransactionWhereInput {
  @Field(() => [BTCSettlementTransactionWhereInput], { nullable: true })
  AND?: Array<BTCSettlementTransactionWhereInput>;

  @Field(() => [BTCSettlementTransactionWhereInput], { nullable: true })
  OR?: Array<BTCSettlementTransactionWhereInput>;

  @Field(() => [BTCSettlementTransactionWhereInput], { nullable: true })
  NOT?: Array<BTCSettlementTransactionWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  incomingTxnId?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  orderId?: StringNullableFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  orderplaceTime?: DateTimeNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  amountReceivedInUSD?: StringNullableFilter;

  @Field(() => EnumBTCTxnProcessStatusFilter, { nullable: true })
  status?: EnumBTCTxnProcessStatusFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  failedRemarks?: StringNullableFilter;

  @Field(() => BTCIncomingTransactionRelationFilter, { nullable: true })
  incomingTxn?: BTCIncomingTransactionRelationFilter;
}
