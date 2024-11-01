import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BTCTxnProcessStatus } from '../prisma/btc-txn-process-status.enum';

@ObjectType()
export class BTCSettlementTransactionMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    incomingTxnId?: string;

    @Field(() => String, {nullable:true})
    orderId?: string;

    @Field(() => Date, {nullable:true})
    orderplaceTime?: Date | string;

    @Field(() => String, {nullable:true})
    amountReceivedInUSD?: string;

    @Field(() => BTCTxnProcessStatus, {nullable:true})
    status?: keyof typeof BTCTxnProcessStatus;

    @Field(() => String, {nullable:true})
    failedRemarks?: string;
}
