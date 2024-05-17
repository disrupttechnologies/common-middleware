import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SettlementTransactionWhereUniqueInput } from './settlement-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { SettlementTransactionCreateInput } from './settlement-transaction-create.input';
import { SettlementTransactionUpdateInput } from './settlement-transaction-update.input';

@ArgsType()
export class UpsertOneSettlementTransactionArgs {

    @Field(() => SettlementTransactionWhereUniqueInput, {nullable:false})
    @Type(() => SettlementTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<SettlementTransactionWhereUniqueInput, 'id' | 'orderId'>;

    @Field(() => SettlementTransactionCreateInput, {nullable:false})
    @Type(() => SettlementTransactionCreateInput)
    create!: SettlementTransactionCreateInput;

    @Field(() => SettlementTransactionUpdateInput, {nullable:false})
    @Type(() => SettlementTransactionUpdateInput)
    update!: SettlementTransactionUpdateInput;
}
