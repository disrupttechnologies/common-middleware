import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BinanceIncomingTxnCreateWithoutWhitelabelIncomingTransactionInput } from './binance-incoming-txn-create-without-whitelabel-incoming-transaction.input';
import { Type } from 'class-transformer';
import { BinanceIncomingTxnCreateOrConnectWithoutWhitelabelIncomingTransactionInput } from './binance-incoming-txn-create-or-connect-without-whitelabel-incoming-transaction.input';
import { Prisma } from '@prisma/client';
import { BinanceIncomingTxnWhereUniqueInput } from './binance-incoming-txn-where-unique.input';

@InputType()
export class BinanceIncomingTxnCreateNestedOneWithoutWhitelabelIncomingTransactionInput {

    @Field(() => BinanceIncomingTxnCreateWithoutWhitelabelIncomingTransactionInput, {nullable:true})
    @Type(() => BinanceIncomingTxnCreateWithoutWhitelabelIncomingTransactionInput)
    create?: BinanceIncomingTxnCreateWithoutWhitelabelIncomingTransactionInput;

    @Field(() => BinanceIncomingTxnCreateOrConnectWithoutWhitelabelIncomingTransactionInput, {nullable:true})
    @Type(() => BinanceIncomingTxnCreateOrConnectWithoutWhitelabelIncomingTransactionInput)
    connectOrCreate?: BinanceIncomingTxnCreateOrConnectWithoutWhitelabelIncomingTransactionInput;

    @Field(() => BinanceIncomingTxnWhereUniqueInput, {nullable:true})
    @Type(() => BinanceIncomingTxnWhereUniqueInput)
    connect?: Prisma.AtLeast<BinanceIncomingTxnWhereUniqueInput, 'id' | 'txnHash' | 'binanceTxnId' | 'settlementTransactionId'>;
}
