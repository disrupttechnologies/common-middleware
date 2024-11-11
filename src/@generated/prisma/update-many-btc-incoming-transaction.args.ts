import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BTCIncomingTransactionUpdateManyMutationInput } from '../btc-incoming-transaction/btc-incoming-transaction-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BTCIncomingTransactionWhereInput } from '../btc-incoming-transaction/btc-incoming-transaction-where.input';

@ArgsType()
export class UpdateManyBtcIncomingTransactionArgs {
  @Field(() => BTCIncomingTransactionUpdateManyMutationInput, {
    nullable: false,
  })
  @Type(() => BTCIncomingTransactionUpdateManyMutationInput)
  data!: BTCIncomingTransactionUpdateManyMutationInput;

  @Field(() => BTCIncomingTransactionWhereInput, { nullable: true })
  @Type(() => BTCIncomingTransactionWhereInput)
  where?: BTCIncomingTransactionWhereInput;
}
