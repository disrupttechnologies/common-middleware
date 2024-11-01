import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WhitelabelIncomingTransactionUpdateManyMutationInput } from './whitelabel-incoming-transaction-update-many-mutation.input';
import { Type } from 'class-transformer';
import { WhitelabelIncomingTransactionWhereInput } from './whitelabel-incoming-transaction-where.input';

@ArgsType()
export class UpdateManyWhitelabelIncomingTransactionArgs {

    @Field(() => WhitelabelIncomingTransactionUpdateManyMutationInput, {nullable:false})
    @Type(() => WhitelabelIncomingTransactionUpdateManyMutationInput)
    data!: WhitelabelIncomingTransactionUpdateManyMutationInput;

    @Field(() => WhitelabelIncomingTransactionWhereInput, {nullable:true})
    @Type(() => WhitelabelIncomingTransactionWhereInput)
    where?: WhitelabelIncomingTransactionWhereInput;
}
