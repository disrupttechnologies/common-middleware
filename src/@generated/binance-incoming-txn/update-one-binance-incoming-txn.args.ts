import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BinanceIncomingTxnUpdateInput } from './binance-incoming-txn-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BinanceIncomingTxnWhereUniqueInput } from './binance-incoming-txn-where-unique.input';

@ArgsType()
export class UpdateOneBinanceIncomingTxnArgs {

    @Field(() => BinanceIncomingTxnUpdateInput, {nullable:false})
    @Type(() => BinanceIncomingTxnUpdateInput)
    data!: BinanceIncomingTxnUpdateInput;

    @Field(() => BinanceIncomingTxnWhereUniqueInput, {nullable:false})
    @Type(() => BinanceIncomingTxnWhereUniqueInput)
    where!: Prisma.AtLeast<BinanceIncomingTxnWhereUniqueInput, 'id' | 'txnHash' | 'binanceTxnId' | 'settlementTransactionId'>;
}
