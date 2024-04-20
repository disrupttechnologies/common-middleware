import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BTCIncomingTransactionCreateManyUserInput } from './btc-incoming-transaction-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class BTCIncomingTransactionCreateManyUserInputEnvelope {

    @Field(() => [BTCIncomingTransactionCreateManyUserInput], {nullable:false})
    @Type(() => BTCIncomingTransactionCreateManyUserInput)
    data!: Array<BTCIncomingTransactionCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
