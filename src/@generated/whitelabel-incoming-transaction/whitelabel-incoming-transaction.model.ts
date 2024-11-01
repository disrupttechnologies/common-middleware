import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { BinanceIncomingTxn } from '../binance-incoming-txn/binance-incoming-txn.model';

@ObjectType()
export class WhitelabelIncomingTransaction {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    whitelabelId!: string;

    @Field(() => String, {nullable:false})
    provisionTxnHash!: string;

    @Field(() => String, {nullable:true})
    settlementTransactionId!: string | null;

    @Field(() => BinanceIncomingTxn, {nullable:true})
    settlementTransaction?: BinanceIncomingTxn | null;
}
