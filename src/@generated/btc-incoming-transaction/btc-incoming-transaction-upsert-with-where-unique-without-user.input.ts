import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BTCIncomingTransactionWhereUniqueInput } from './btc-incoming-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { BTCIncomingTransactionUpdateWithoutUserInput } from './btc-incoming-transaction-update-without-user.input';
import { BTCIncomingTransactionCreateWithoutUserInput } from './btc-incoming-transaction-create-without-user.input';

@InputType()
export class BTCIncomingTransactionUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => BTCIncomingTransactionWhereUniqueInput, { nullable: false })
  @Type(() => BTCIncomingTransactionWhereUniqueInput)
  where!: Prisma.AtLeast<
    BTCIncomingTransactionWhereUniqueInput,
    'id' | 'txnHash' | 'binanceTxnId'
  >;

  @Field(() => BTCIncomingTransactionUpdateWithoutUserInput, {
    nullable: false,
  })
  @Type(() => BTCIncomingTransactionUpdateWithoutUserInput)
  update!: BTCIncomingTransactionUpdateWithoutUserInput;

  @Field(() => BTCIncomingTransactionCreateWithoutUserInput, {
    nullable: false,
  })
  @Type(() => BTCIncomingTransactionCreateWithoutUserInput)
  create!: BTCIncomingTransactionCreateWithoutUserInput;
}
