import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BinanceIncomingTxnUpdateWithoutSettlementTransactionInput } from './binance-incoming-txn-update-without-settlement-transaction.input';
import { Type } from 'class-transformer';
import { BinanceIncomingTxnCreateWithoutSettlementTransactionInput } from './binance-incoming-txn-create-without-settlement-transaction.input';
import { BinanceIncomingTxnWhereInput } from './binance-incoming-txn-where.input';

@InputType()
export class BinanceIncomingTxnUpsertWithoutSettlementTransactionInput {

    @Field(() => BinanceIncomingTxnUpdateWithoutSettlementTransactionInput, {nullable:false})
    @Type(() => BinanceIncomingTxnUpdateWithoutSettlementTransactionInput)
    update!: BinanceIncomingTxnUpdateWithoutSettlementTransactionInput;

    @Field(() => BinanceIncomingTxnCreateWithoutSettlementTransactionInput, {nullable:false})
    @Type(() => BinanceIncomingTxnCreateWithoutSettlementTransactionInput)
    create!: BinanceIncomingTxnCreateWithoutSettlementTransactionInput;

    @Field(() => BinanceIncomingTxnWhereInput, {nullable:true})
    @Type(() => BinanceIncomingTxnWhereInput)
    where?: BinanceIncomingTxnWhereInput;
}
