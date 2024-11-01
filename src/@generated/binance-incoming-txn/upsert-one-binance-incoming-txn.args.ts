import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BinanceIncomingTxnWhereUniqueInput } from './binance-incoming-txn-where-unique.input';
import { Type } from 'class-transformer';
import { BinanceIncomingTxnCreateInput } from './binance-incoming-txn-create.input';
import { BinanceIncomingTxnUpdateInput } from './binance-incoming-txn-update.input';

@ArgsType()
export class UpsertOneBinanceIncomingTxnArgs {

    @Field(() => BinanceIncomingTxnWhereUniqueInput, {nullable:false})
    @Type(() => BinanceIncomingTxnWhereUniqueInput)
    where!: Prisma.AtLeast<BinanceIncomingTxnWhereUniqueInput, 'id' | 'txnHash' | 'binanceTxnId' | 'settlementTransactionId'>;

    @Field(() => BinanceIncomingTxnCreateInput, {nullable:false})
    @Type(() => BinanceIncomingTxnCreateInput)
    create!: BinanceIncomingTxnCreateInput;

    @Field(() => BinanceIncomingTxnUpdateInput, {nullable:false})
    @Type(() => BinanceIncomingTxnUpdateInput)
    update!: BinanceIncomingTxnUpdateInput;
}
