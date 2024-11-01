import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BTCSettlementTransactionOrderByWithRelationInput } from '../btc-settlement-transaction/btc-settlement-transaction-order-by-with-relation.input';
import { UserBTCAddressOrderByWithRelationInput } from '../user-btc-address/user-btc-address-order-by-with-relation.input';

@InputType()
export class BTCIncomingTransactionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    txnHash?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    binanceTxnId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    txnTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    senderAddress?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    txnStatus?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    failedRemarks?: SortOrderInput;

    @Field(() => BTCSettlementTransactionOrderByWithRelationInput, {nullable:true})
    settlementTxn?: BTCSettlementTransactionOrderByWithRelationInput;

    @Field(() => UserBTCAddressOrderByWithRelationInput, {nullable:true})
    user?: UserBTCAddressOrderByWithRelationInput;
}
