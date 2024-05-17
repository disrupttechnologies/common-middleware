import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WhitelabelIncomingTransactionWhereInput } from './whitelabel-incoming-transaction-where.input';
import { Type } from 'class-transformer';
import { WhitelabelIncomingTransactionOrderByWithRelationInput } from './whitelabel-incoming-transaction-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { WhitelabelIncomingTransactionWhereUniqueInput } from './whitelabel-incoming-transaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WhitelabelIncomingTransactionScalarFieldEnum } from './whitelabel-incoming-transaction-scalar-field.enum';

@ArgsType()
export class FindFirstWhitelabelIncomingTransactionOrThrowArgs {

    @Field(() => WhitelabelIncomingTransactionWhereInput, {nullable:true})
    @Type(() => WhitelabelIncomingTransactionWhereInput)
    where?: WhitelabelIncomingTransactionWhereInput;

    @Field(() => [WhitelabelIncomingTransactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WhitelabelIncomingTransactionOrderByWithRelationInput>;

    @Field(() => WhitelabelIncomingTransactionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<WhitelabelIncomingTransactionWhereUniqueInput, 'id' | 'provisionTxnHash' | 'settlementTransactionId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [WhitelabelIncomingTransactionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof WhitelabelIncomingTransactionScalarFieldEnum>;
}
