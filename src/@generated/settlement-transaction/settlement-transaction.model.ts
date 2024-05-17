import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { SettlementTransactionProcessStatus } from '../prisma/settlement-transaction-process-status.enum';
import { BinanceIncomingTxn } from '../binance-incoming-txn/binance-incoming-txn.model';

@ObjectType()
export class SettlementTransaction {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    orderId!: string | null;

    @Field(() => Date, {nullable:true})
    orderplaceTime!: Date | null;

    @Field(() => String, {nullable:true})
    amountReceived!: string | null;

    @Field(() => SettlementTransactionProcessStatus, {nullable:false,defaultValue:'NOT_INITIALIZED'})
    status!: keyof typeof SettlementTransactionProcessStatus;

    @Field(() => BinanceIncomingTxn, {nullable:true})
    incomingTxn?: BinanceIncomingTxn | null;
}
