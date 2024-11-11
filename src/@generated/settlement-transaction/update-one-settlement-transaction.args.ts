import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettlementTransactionUpdateInput } from './settlement-transaction-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SettlementTransactionWhereUniqueInput } from './settlement-transaction-where-unique.input';

@ArgsType()
export class UpdateOneSettlementTransactionArgs {
  @Field(() => SettlementTransactionUpdateInput, { nullable: false })
  @Type(() => SettlementTransactionUpdateInput)
  data!: SettlementTransactionUpdateInput;

  @Field(() => SettlementTransactionWhereUniqueInput, { nullable: false })
  @Type(() => SettlementTransactionWhereUniqueInput)
  where!: Prisma.AtLeast<
    SettlementTransactionWhereUniqueInput,
    'id' | 'orderId'
  >;
}
