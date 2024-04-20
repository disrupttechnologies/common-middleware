import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BTCIncomingTransactionAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    amount?: true;
}
