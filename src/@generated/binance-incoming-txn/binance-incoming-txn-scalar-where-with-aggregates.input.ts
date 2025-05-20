import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumIncomingTxnStatusNullableWithAggregatesFilter } from '../prisma/enum-incoming-txn-status-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class BinanceIncomingTxnScalarWhereWithAggregatesInput {
  @Field(() => [BinanceIncomingTxnScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<BinanceIncomingTxnScalarWhereWithAggregatesInput>;

  @Field(() => [BinanceIncomingTxnScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<BinanceIncomingTxnScalarWhereWithAggregatesInput>;

  @Field(() => [BinanceIncomingTxnScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<BinanceIncomingTxnScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  paidCurrency?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  amountInPaidCurrency?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  network?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  txnHash?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  senderAddress?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  binanceTxnId?: StringWithAggregatesFilter;

  @Field(() => EnumIncomingTxnStatusNullableWithAggregatesFilter, {
    nullable: true,
  })
  status?: EnumIncomingTxnStatusNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  settlementTransactionId?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  failedRemarks?: StringNullableWithAggregatesFilter;
}
