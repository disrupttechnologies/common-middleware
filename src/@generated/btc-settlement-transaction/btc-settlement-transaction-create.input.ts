import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BTCTxnProcessStatus } from '../prisma/btc-txn-process-status.enum';
import { BTCIncomingTransactionCreateNestedOneWithoutSettlementTxnInput } from '../btc-incoming-transaction/btc-incoming-transaction-create-nested-one-without-settlement-txn.input';

@InputType()
export class BTCSettlementTransactionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

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

    @Field(() => BTCIncomingTransactionCreateNestedOneWithoutSettlementTxnInput, {nullable:false})
    incomingTxn!: BTCIncomingTransactionCreateNestedOneWithoutSettlementTxnInput;
}
