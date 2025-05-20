import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BTCIncomingTransactionCreateWithoutUserInput } from './btc-incoming-transaction-create-without-user.input';
import { Type } from 'class-transformer';
import { BTCIncomingTransactionCreateOrConnectWithoutUserInput } from './btc-incoming-transaction-create-or-connect-without-user.input';
import { BTCIncomingTransactionUpsertWithWhereUniqueWithoutUserInput } from './btc-incoming-transaction-upsert-with-where-unique-without-user.input';
import { BTCIncomingTransactionCreateManyUserInputEnvelope } from './btc-incoming-transaction-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BTCIncomingTransactionWhereUniqueInput } from './btc-incoming-transaction-where-unique.input';
import { BTCIncomingTransactionUpdateWithWhereUniqueWithoutUserInput } from './btc-incoming-transaction-update-with-where-unique-without-user.input';
import { BTCIncomingTransactionUpdateManyWithWhereWithoutUserInput } from './btc-incoming-transaction-update-many-with-where-without-user.input';
import { BTCIncomingTransactionScalarWhereInput } from './btc-incoming-transaction-scalar-where.input';

@InputType()
export class BTCIncomingTransactionUncheckedUpdateManyWithoutUserNestedInput {
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

  @Field(() => [BTCIncomingTransactionUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => BTCIncomingTransactionUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<BTCIncomingTransactionUpsertWithWhereUniqueWithoutUserInput>;

  @Field(() => BTCIncomingTransactionCreateManyUserInputEnvelope, {
    nullable: true,
  })
  @Type(() => BTCIncomingTransactionCreateManyUserInputEnvelope)
  createMany?: BTCIncomingTransactionCreateManyUserInputEnvelope;

  @Field(() => [BTCIncomingTransactionWhereUniqueInput], { nullable: true })
  @Type(() => BTCIncomingTransactionWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<
      BTCIncomingTransactionWhereUniqueInput,
      'id' | 'txnHash' | 'binanceTxnId'
    >
  >;

  @Field(() => [BTCIncomingTransactionWhereUniqueInput], { nullable: true })
  @Type(() => BTCIncomingTransactionWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<
      BTCIncomingTransactionWhereUniqueInput,
      'id' | 'txnHash' | 'binanceTxnId'
    >
  >;

  @Field(() => [BTCIncomingTransactionWhereUniqueInput], { nullable: true })
  @Type(() => BTCIncomingTransactionWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<
      BTCIncomingTransactionWhereUniqueInput,
      'id' | 'txnHash' | 'binanceTxnId'
    >
  >;

  @Field(() => [BTCIncomingTransactionWhereUniqueInput], { nullable: true })
  @Type(() => BTCIncomingTransactionWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<
      BTCIncomingTransactionWhereUniqueInput,
      'id' | 'txnHash' | 'binanceTxnId'
    >
  >;

  @Field(() => [BTCIncomingTransactionUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => BTCIncomingTransactionUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<BTCIncomingTransactionUpdateWithWhereUniqueWithoutUserInput>;

  @Field(() => [BTCIncomingTransactionUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  @Type(() => BTCIncomingTransactionUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<BTCIncomingTransactionUpdateManyWithWhereWithoutUserInput>;

  @Field(() => [BTCIncomingTransactionScalarWhereInput], { nullable: true })
  @Type(() => BTCIncomingTransactionScalarWhereInput)
  deleteMany?: Array<BTCIncomingTransactionScalarWhereInput>;
}
