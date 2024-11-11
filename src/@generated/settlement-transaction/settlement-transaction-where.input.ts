import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumSettlementTransactionProcessStatusFilter } from '../prisma/enum-settlement-transaction-process-status-filter.input';
import { BinanceIncomingTxnNullableRelationFilter } from '../binance-incoming-txn/binance-incoming-txn-nullable-relation-filter.input';

@InputType()
export class SettlementTransactionWhereInput {
  @Field(() => [SettlementTransactionWhereInput], { nullable: true })
  AND?: Array<SettlementTransactionWhereInput>;

  @Field(() => [SettlementTransactionWhereInput], { nullable: true })
  OR?: Array<SettlementTransactionWhereInput>;

  @Field(() => [SettlementTransactionWhereInput], { nullable: true })
  NOT?: Array<SettlementTransactionWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  orderId?: StringNullableFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  orderplaceTime?: DateTimeNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  amountReceived?: StringNullableFilter;

  @Field(() => EnumSettlementTransactionProcessStatusFilter, { nullable: true })
  status?: EnumSettlementTransactionProcessStatusFilter;

  @Field(() => BinanceIncomingTxnNullableRelationFilter, { nullable: true })
  incomingTxn?: BinanceIncomingTxnNullableRelationFilter;
}
