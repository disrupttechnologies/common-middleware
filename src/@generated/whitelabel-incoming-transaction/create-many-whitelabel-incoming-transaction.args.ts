import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WhitelabelIncomingTransactionCreateManyInput } from './whitelabel-incoming-transaction-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyWhitelabelIncomingTransactionArgs {

    @Field(() => [WhitelabelIncomingTransactionCreateManyInput], {nullable:false})
    @Type(() => WhitelabelIncomingTransactionCreateManyInput)
    data!: Array<WhitelabelIncomingTransactionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
