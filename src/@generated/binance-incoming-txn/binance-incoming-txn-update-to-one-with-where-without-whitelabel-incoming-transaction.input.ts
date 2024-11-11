import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BinanceIncomingTxnWhereInput } from './binance-incoming-txn-where.input';
import { Type } from 'class-transformer';
import { BinanceIncomingTxnUpdateWithoutWhitelabelIncomingTransactionInput } from './binance-incoming-txn-update-without-whitelabel-incoming-transaction.input';

@InputType()
export class BinanceIncomingTxnUpdateToOneWithWhereWithoutWhitelabelIncomingTransactionInput {
  @Field(() => BinanceIncomingTxnWhereInput, { nullable: true })
  @Type(() => BinanceIncomingTxnWhereInput)
  where?: BinanceIncomingTxnWhereInput;

  @Field(
    () => BinanceIncomingTxnUpdateWithoutWhitelabelIncomingTransactionInput,
    { nullable: false },
  )
  @Type(() => BinanceIncomingTxnUpdateWithoutWhitelabelIncomingTransactionInput)
  data!: BinanceIncomingTxnUpdateWithoutWhitelabelIncomingTransactionInput;
}
