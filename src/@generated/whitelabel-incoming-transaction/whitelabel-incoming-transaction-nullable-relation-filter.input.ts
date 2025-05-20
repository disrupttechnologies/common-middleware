import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WhitelabelIncomingTransactionWhereInput } from './whitelabel-incoming-transaction-where.input';

@InputType()
export class WhitelabelIncomingTransactionNullableRelationFilter {
  @Field(() => WhitelabelIncomingTransactionWhereInput, { nullable: true })
  is?: WhitelabelIncomingTransactionWhereInput;

  @Field(() => WhitelabelIncomingTransactionWhereInput, { nullable: true })
  isNot?: WhitelabelIncomingTransactionWhereInput;
}
