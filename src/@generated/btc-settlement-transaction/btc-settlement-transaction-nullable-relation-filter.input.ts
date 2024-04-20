import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BTCSettlementTransactionWhereInput } from './btc-settlement-transaction-where.input';

@InputType()
export class BTCSettlementTransactionNullableRelationFilter {

    @Field(() => BTCSettlementTransactionWhereInput, {nullable:true})
    is?: BTCSettlementTransactionWhereInput;

    @Field(() => BTCSettlementTransactionWhereInput, {nullable:true})
    isNot?: BTCSettlementTransactionWhereInput;
}
