import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SettlementTransactionWhereUniqueInput } from './settlement-transaction-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneSettlementTransactionArgs {
  @Field(() => SettlementTransactionWhereUniqueInput, { nullable: false })
  @Type(() => SettlementTransactionWhereUniqueInput)
  where!: Prisma.AtLeast<
    SettlementTransactionWhereUniqueInput,
    'id' | 'orderId'
  >;
}
