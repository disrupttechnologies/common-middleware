import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WhitelabelIncomingTransactionUpdateInput } from './whitelabel-incoming-transaction-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { WhitelabelIncomingTransactionWhereUniqueInput } from './whitelabel-incoming-transaction-where-unique.input';

@ArgsType()
export class UpdateOneWhitelabelIncomingTransactionArgs {
  @Field(() => WhitelabelIncomingTransactionUpdateInput, { nullable: false })
  @Type(() => WhitelabelIncomingTransactionUpdateInput)
  data!: WhitelabelIncomingTransactionUpdateInput;

  @Field(() => WhitelabelIncomingTransactionWhereUniqueInput, {
    nullable: false,
  })
  @Type(() => WhitelabelIncomingTransactionWhereUniqueInput)
  where!: Prisma.AtLeast<
    WhitelabelIncomingTransactionWhereUniqueInput,
    'id' | 'provisionTxnHash' | 'settlementTransactionId'
  >;
}
