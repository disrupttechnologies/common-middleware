import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WhitelabelIncomingTransactionWhereUniqueInput } from './whitelabel-incoming-transaction-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneWhitelabelIncomingTransactionArgs {

    @Field(() => WhitelabelIncomingTransactionWhereUniqueInput, {nullable:false})
    @Type(() => WhitelabelIncomingTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<WhitelabelIncomingTransactionWhereUniqueInput, 'id' | 'provisionTxnHash' | 'settlementTransactionId'>;
}
