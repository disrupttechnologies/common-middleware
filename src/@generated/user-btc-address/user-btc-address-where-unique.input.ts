import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserBTCAddressWhereInput } from './user-btc-address-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BTCIncomingTransactionListRelationFilter } from '../btc-incoming-transaction/btc-incoming-transaction-list-relation-filter.input';

@InputType()
export class UserBTCAddressWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  address?: string;

  @Field(() => [UserBTCAddressWhereInput], { nullable: true })
  AND?: Array<UserBTCAddressWhereInput>;

  @Field(() => [UserBTCAddressWhereInput], { nullable: true })
  OR?: Array<UserBTCAddressWhereInput>;

  @Field(() => [UserBTCAddressWhereInput], { nullable: true })
  NOT?: Array<UserBTCAddressWhereInput>;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  userId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  whitelabelId?: StringFilter;

  @Field(() => BTCIncomingTransactionListRelationFilter, { nullable: true })
  txns?: BTCIncomingTransactionListRelationFilter;
}
