import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BinanceIncomingTxnWhereInput } from './binance-incoming-txn-where.input';

@InputType()
export class BinanceIncomingTxnNullableRelationFilter {

    @Field(() => BinanceIncomingTxnWhereInput, {nullable:true})
    is?: BinanceIncomingTxnWhereInput;

    @Field(() => BinanceIncomingTxnWhereInput, {nullable:true})
    isNot?: BinanceIncomingTxnWhereInput;
}
