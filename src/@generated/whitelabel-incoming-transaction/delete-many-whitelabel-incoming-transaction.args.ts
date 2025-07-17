import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WhitelabelIncomingTransactionWhereInput } from './whitelabel-incoming-transaction-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyWhitelabelIncomingTransactionArgs {

    @Field(() => WhitelabelIncomingTransactionWhereInput, {nullable:true})
    @Type(() => WhitelabelIncomingTransactionWhereInput)
    where?: WhitelabelIncomingTransactionWhereInput;
}
