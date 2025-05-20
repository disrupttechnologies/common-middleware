import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BinanceIncomingTxnOrderByWithRelationInput } from '../binance-incoming-txn/binance-incoming-txn-order-by-with-relation.input';

@InputType()
export class WhitelabelIncomingTransactionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    whitelabelId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    provisionTxnHash?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    settlementTransactionId?: SortOrderInput;

    @Field(() => BinanceIncomingTxnOrderByWithRelationInput, {nullable:true})
    settlementTransaction?: BinanceIncomingTxnOrderByWithRelationInput;
}
