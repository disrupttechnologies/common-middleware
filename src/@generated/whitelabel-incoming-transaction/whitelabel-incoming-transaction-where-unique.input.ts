import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WhitelabelIncomingTransactionWhereInput } from './whitelabel-incoming-transaction-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BinanceIncomingTxnNullableRelationFilter } from '../binance-incoming-txn/binance-incoming-txn-nullable-relation-filter.input';

@InputType()
export class WhitelabelIncomingTransactionWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  provisionTxnHash?: string;

  @Field(() => String, { nullable: true })
  settlementTransactionId?: string;

  @Field(() => [WhitelabelIncomingTransactionWhereInput], { nullable: true })
  AND?: Array<WhitelabelIncomingTransactionWhereInput>;

  @Field(() => [WhitelabelIncomingTransactionWhereInput], { nullable: true })
  OR?: Array<WhitelabelIncomingTransactionWhereInput>;

  @Field(() => [WhitelabelIncomingTransactionWhereInput], { nullable: true })
  NOT?: Array<WhitelabelIncomingTransactionWhereInput>;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  userId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  whitelabelId?: StringFilter;

  @Field(() => BinanceIncomingTxnNullableRelationFilter, { nullable: true })
  settlementTransaction?: BinanceIncomingTxnNullableRelationFilter;
}
