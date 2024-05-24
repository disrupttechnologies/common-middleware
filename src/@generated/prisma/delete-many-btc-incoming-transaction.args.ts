import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BTCIncomingTransactionWhereInput } from '../btc-incoming-transaction/btc-incoming-transaction-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBtcIncomingTransactionArgs {
  @Field(() => BTCIncomingTransactionWhereInput, { nullable: true })
  @Type(() => BTCIncomingTransactionWhereInput)
  where?: BTCIncomingTransactionWhereInput;
}
