import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BTCIncomingTransactionCreateWithoutUserInput } from './btc-incoming-transaction-create-without-user.input';
import { Type } from 'class-transformer';
import { BTCIncomingTransactionCreateOrConnectWithoutUserInput } from './btc-incoming-transaction-create-or-connect-without-user.input';
import { BTCIncomingTransactionCreateManyUserInputEnvelope } from './btc-incoming-transaction-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BTCIncomingTransactionWhereUniqueInput } from './btc-incoming-transaction-where-unique.input';

@InputType()
export class BTCIncomingTransactionUncheckedCreateNestedManyWithoutUserInput {
  @Field(() => [BTCIncomingTransactionCreateWithoutUserInput], {
    nullable: true,
  })
  @Type(() => BTCIncomingTransactionCreateWithoutUserInput)
  create?: Array<BTCIncomingTransactionCreateWithoutUserInput>;

  @Field(() => [BTCIncomingTransactionCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  @Type(() => BTCIncomingTransactionCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<BTCIncomingTransactionCreateOrConnectWithoutUserInput>;

  @Field(() => BTCIncomingTransactionCreateManyUserInputEnvelope, {
    nullable: true,
  })
  @Type(() => BTCIncomingTransactionCreateManyUserInputEnvelope)
  createMany?: BTCIncomingTransactionCreateManyUserInputEnvelope;

  @Field(() => [BTCIncomingTransactionWhereUniqueInput], { nullable: true })
  @Type(() => BTCIncomingTransactionWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<
      BTCIncomingTransactionWhereUniqueInput,
      'id' | 'txnHash' | 'binanceTxnId'
    >
  >;
}
