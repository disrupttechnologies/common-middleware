import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BinanceIncomingTxnCreateNestedOneWithoutWhitelabelIncomingTransactionInput } from '../binance-incoming-txn/binance-incoming-txn-create-nested-one-without-whitelabel-incoming-transaction.input';

@InputType()
export class WhitelabelIncomingTransactionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    whitelabelId!: string;

    @Field(() => String, {nullable:false})
    provisionTxnHash!: string;

    @Field(() => BinanceIncomingTxnCreateNestedOneWithoutWhitelabelIncomingTransactionInput, {nullable:true})
    settlementTransaction?: BinanceIncomingTxnCreateNestedOneWithoutWhitelabelIncomingTransactionInput;
}
