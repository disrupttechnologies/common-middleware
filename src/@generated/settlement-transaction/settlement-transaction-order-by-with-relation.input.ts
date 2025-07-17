import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BinanceIncomingTxnOrderByWithRelationInput } from '../binance-incoming-txn/binance-incoming-txn-order-by-with-relation.input';

@InputType()
export class SettlementTransactionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    orderId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    orderplaceTime?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    amountReceived?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => BinanceIncomingTxnOrderByWithRelationInput, {nullable:true})
    incomingTxn?: BinanceIncomingTxnOrderByWithRelationInput;
}
