import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BinanceIncomingTxnWhereInput } from './binance-incoming-txn-where.input';
import { Type } from 'class-transformer';
import { BinanceIncomingTxnUpdateWithoutSettlementTransactionInput } from './binance-incoming-txn-update-without-settlement-transaction.input';

@InputType()
export class BinanceIncomingTxnUpdateToOneWithWhereWithoutSettlementTransactionInput {

    @Field(() => BinanceIncomingTxnWhereInput, {nullable:true})
    @Type(() => BinanceIncomingTxnWhereInput)
    where?: BinanceIncomingTxnWhereInput;

    @Field(() => BinanceIncomingTxnUpdateWithoutSettlementTransactionInput, {nullable:false})
    @Type(() => BinanceIncomingTxnUpdateWithoutSettlementTransactionInput)
    data!: BinanceIncomingTxnUpdateWithoutSettlementTransactionInput;
}
