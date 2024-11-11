import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BinanceIncomingTxnNullableRelationFilter } from '../binance-incoming-txn/binance-incoming-txn-nullable-relation-filter.input';

@InputType()
export class WhitelabelIncomingTransactionWhereInput {
  @Field(() => [WhitelabelIncomingTransactionWhereInput], { nullable: true })
  AND?: Array<WhitelabelIncomingTransactionWhereInput>;

  @Field(() => [WhitelabelIncomingTransactionWhereInput], { nullable: true })
  OR?: Array<WhitelabelIncomingTransactionWhereInput>;

  @Field(() => [WhitelabelIncomingTransactionWhereInput], { nullable: true })
  NOT?: Array<WhitelabelIncomingTransactionWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  userId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  whitelabelId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  provisionTxnHash?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  settlementTransactionId?: StringNullableFilter;

  @Field(() => BinanceIncomingTxnNullableRelationFilter, { nullable: true })
  settlementTransaction?: BinanceIncomingTxnNullableRelationFilter;
}
