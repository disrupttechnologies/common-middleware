import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BTCIncomingTransactionScalarWhereInput } from './btc-incoming-transaction-scalar-where.input';
import { Type } from 'class-transformer';
import { BTCIncomingTransactionUpdateManyMutationInput } from './btc-incoming-transaction-update-many-mutation.input';

@InputType()
export class BTCIncomingTransactionUpdateManyWithWhereWithoutUserInput {
  @Field(() => BTCIncomingTransactionScalarWhereInput, { nullable: false })
  @Type(() => BTCIncomingTransactionScalarWhereInput)
  where!: BTCIncomingTransactionScalarWhereInput;

  @Field(() => BTCIncomingTransactionUpdateManyMutationInput, {
    nullable: false,
  })
  @Type(() => BTCIncomingTransactionUpdateManyMutationInput)
  data!: BTCIncomingTransactionUpdateManyMutationInput;
}
