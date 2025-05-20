import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BinanceIncomingTxnUpdateOneWithoutWhitelabelIncomingTransactionNestedInput } from '../binance-incoming-txn/binance-incoming-txn-update-one-without-whitelabel-incoming-transaction-nested.input';

@InputType()
export class WhitelabelIncomingTransactionUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: true })
  userId?: string;

  @Field(() => String, { nullable: true })
  whitelabelId?: string;

  @Field(() => String, { nullable: true })
  provisionTxnHash?: string;

  @Field(
    () =>
      BinanceIncomingTxnUpdateOneWithoutWhitelabelIncomingTransactionNestedInput,
    { nullable: true },
  )
  settlementTransaction?: BinanceIncomingTxnUpdateOneWithoutWhitelabelIncomingTransactionNestedInput;
}
