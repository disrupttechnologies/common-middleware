import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { BTCIncomingTransaction } from '../btc-incoming-transaction/btc-incoming-transaction.model';

@ObjectType()
export class UserBTCAddress {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => String, { nullable: false })
  address!: string;

  @Field(() => String, { nullable: false })
  userId!: string;

  @Field(() => String, { nullable: false })
  whitelabelId!: string;

  @Field(() => [BTCIncomingTransaction], { nullable: true })
  txns?: Array<BTCIncomingTransaction>;
}
