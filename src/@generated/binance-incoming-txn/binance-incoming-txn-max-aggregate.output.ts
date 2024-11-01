import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { IncomingTxnStatus } from '../prisma/incoming-txn-status.enum';

@ObjectType()
export class BinanceIncomingTxnMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    paidCurrency?: string;

    @Field(() => String, {nullable:true})
    amountInPaidCurrency?: string;

    @Field(() => String, {nullable:true})
    network?: string;

    @Field(() => String, {nullable:true})
    txnHash?: string;

    @Field(() => String, {nullable:true})
    senderAddress?: string;

    @Field(() => String, {nullable:true})
    binanceTxnId?: string;

    @Field(() => IncomingTxnStatus, {nullable:true})
    status?: keyof typeof IncomingTxnStatus;

    @Field(() => String, {nullable:true})
    settlementTransactionId?: string;

    @Field(() => String, {nullable:true})
    failedRemarks?: string;
}
