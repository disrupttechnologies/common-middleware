import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BTCIncomingTransactionWhereInput } from './btc-incoming-transaction-where.input';

@InputType()
export class BTCIncomingTransactionRelationFilter {

    @Field(() => BTCIncomingTransactionWhereInput, {nullable:true})
    is?: BTCIncomingTransactionWhereInput;

    @Field(() => BTCIncomingTransactionWhereInput, {nullable:true})
    isNot?: BTCIncomingTransactionWhereInput;
}
