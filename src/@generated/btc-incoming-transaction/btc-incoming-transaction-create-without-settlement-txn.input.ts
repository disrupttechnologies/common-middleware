import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TxnStatus } from '../prisma/txn-status.enum';
import { UserBTCAddressCreateNestedOneWithoutTxnsInput } from '../user-btc-address/user-btc-address-create-nested-one-without-txns.input';

@InputType()
export class BTCIncomingTransactionCreateWithoutSettlementTxnInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    txnHash!: string;

    @Field(() => String, {nullable:false})
    binanceTxnId!: string;

    @Field(() => Date, {nullable:false})
    txnTime!: Date | string;

    @Field(() => String, {nullable:false})
    amount!: string;

    @Field(() => TxnStatus, {nullable:false})
    txnStatus!: keyof typeof TxnStatus;

    @Field(() => String, {nullable:true})
    failedRemarks?: string;

    @Field(() => UserBTCAddressCreateNestedOneWithoutTxnsInput, {nullable:false})
    user!: UserBTCAddressCreateNestedOneWithoutTxnsInput;
}
