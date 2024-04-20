import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BTCIncomingTransactionSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    amount?: true;
}
