import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BTCIncomingTransactionWhereInput } from './btc-incoming-transaction-where.input';

@InputType()
export class BTCIncomingTransactionListRelationFilter {
  @Field(() => BTCIncomingTransactionWhereInput, { nullable: true })
  every?: BTCIncomingTransactionWhereInput;

  @Field(() => BTCIncomingTransactionWhereInput, { nullable: true })
  some?: BTCIncomingTransactionWhereInput;

  @Field(() => BTCIncomingTransactionWhereInput, { nullable: true })
  none?: BTCIncomingTransactionWhereInput;
}
