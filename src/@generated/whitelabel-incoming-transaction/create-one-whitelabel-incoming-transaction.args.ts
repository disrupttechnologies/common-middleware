import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WhitelabelIncomingTransactionCreateInput } from './whitelabel-incoming-transaction-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneWhitelabelIncomingTransactionArgs {
  @Field(() => WhitelabelIncomingTransactionCreateInput, { nullable: false })
  @Type(() => WhitelabelIncomingTransactionCreateInput)
  data!: WhitelabelIncomingTransactionCreateInput;
}
