import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { IncomingTxnStatus } from '../prisma/incoming-txn-status.enum';
import { SettlementTransaction } from '../settlement-transaction/settlement-transaction.model';
import { WhitelabelIncomingTransaction } from '../whitelabel-incoming-transaction/whitelabel-incoming-transaction.model';

@ObjectType()
export class BinanceIncomingTxn {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    paidCurrency!: string;

    @Field(() => String, {nullable:false})
    amountInPaidCurrency!: string;

    @Field(() => String, {nullable:false})
    network!: string;

    @Field(() => String, {nullable:false})
    txnHash!: string;

    @Field(() => String, {nullable:false})
    senderAddress!: string;

    @Field(() => String, {nullable:false})
    binanceTxnId!: string;

    @Field(() => IncomingTxnStatus, {nullable:true,defaultValue:'PAYMENT_RECEIVED'})
    status!: keyof typeof IncomingTxnStatus | null;

    @Field(() => String, {nullable:true})
    settlementTransactionId!: string | null;

    @Field(() => String, {nullable:true})
    failedRemarks!: string | null;

    @Field(() => SettlementTransaction, {nullable:true})
    settlementTransaction?: SettlementTransaction | null;

    @Field(() => WhitelabelIncomingTransaction, {nullable:true})
    whitelabelIncomingTransaction?: WhitelabelIncomingTransaction | null;
}
