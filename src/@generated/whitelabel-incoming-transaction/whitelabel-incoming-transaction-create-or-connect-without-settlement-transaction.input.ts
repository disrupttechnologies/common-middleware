import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WhitelabelIncomingTransactionWhereUniqueInput } from './whitelabel-incoming-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { WhitelabelIncomingTransactionCreateWithoutSettlementTransactionInput } from './whitelabel-incoming-transaction-create-without-settlement-transaction.input';

@InputType()
export class WhitelabelIncomingTransactionCreateOrConnectWithoutSettlementTransactionInput {

    @Field(() => WhitelabelIncomingTransactionWhereUniqueInput, {nullable:false})
    @Type(() => WhitelabelIncomingTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<WhitelabelIncomingTransactionWhereUniqueInput, 'id' | 'provisionTxnHash' | 'settlementTransactionId'>;

    @Field(() => WhitelabelIncomingTransactionCreateWithoutSettlementTransactionInput, {nullable:false})
    @Type(() => WhitelabelIncomingTransactionCreateWithoutSettlementTransactionInput)
    create!: WhitelabelIncomingTransactionCreateWithoutSettlementTransactionInput;
}
