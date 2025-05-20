import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WhitelabelIncomingTransactionWhereUniqueInput } from './whitelabel-incoming-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { WhitelabelIncomingTransactionCreateInput } from './whitelabel-incoming-transaction-create.input';
import { WhitelabelIncomingTransactionUpdateInput } from './whitelabel-incoming-transaction-update.input';

@ArgsType()
export class UpsertOneWhitelabelIncomingTransactionArgs {

    @Field(() => WhitelabelIncomingTransactionWhereUniqueInput, {nullable:false})
    @Type(() => WhitelabelIncomingTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<WhitelabelIncomingTransactionWhereUniqueInput, 'id' | 'provisionTxnHash' | 'settlementTransactionId'>;

    @Field(() => WhitelabelIncomingTransactionCreateInput, {nullable:false})
    @Type(() => WhitelabelIncomingTransactionCreateInput)
    create!: WhitelabelIncomingTransactionCreateInput;

    @Field(() => WhitelabelIncomingTransactionUpdateInput, {nullable:false})
    @Type(() => WhitelabelIncomingTransactionUpdateInput)
    update!: WhitelabelIncomingTransactionUpdateInput;
}
