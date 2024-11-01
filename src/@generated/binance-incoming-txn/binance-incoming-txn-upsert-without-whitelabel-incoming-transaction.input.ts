import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BinanceIncomingTxnUpdateWithoutWhitelabelIncomingTransactionInput } from './binance-incoming-txn-update-without-whitelabel-incoming-transaction.input';
import { Type } from 'class-transformer';
import { BinanceIncomingTxnCreateWithoutWhitelabelIncomingTransactionInput } from './binance-incoming-txn-create-without-whitelabel-incoming-transaction.input';
import { BinanceIncomingTxnWhereInput } from './binance-incoming-txn-where.input';

@InputType()
export class BinanceIncomingTxnUpsertWithoutWhitelabelIncomingTransactionInput {

    @Field(() => BinanceIncomingTxnUpdateWithoutWhitelabelIncomingTransactionInput, {nullable:false})
    @Type(() => BinanceIncomingTxnUpdateWithoutWhitelabelIncomingTransactionInput)
    update!: BinanceIncomingTxnUpdateWithoutWhitelabelIncomingTransactionInput;

    @Field(() => BinanceIncomingTxnCreateWithoutWhitelabelIncomingTransactionInput, {nullable:false})
    @Type(() => BinanceIncomingTxnCreateWithoutWhitelabelIncomingTransactionInput)
    create!: BinanceIncomingTxnCreateWithoutWhitelabelIncomingTransactionInput;

    @Field(() => BinanceIncomingTxnWhereInput, {nullable:true})
    @Type(() => BinanceIncomingTxnWhereInput)
    where?: BinanceIncomingTxnWhereInput;
}
