import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettlementTransactionWhereInput } from './settlement-transaction-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySettlementTransactionArgs {
  @Field(() => SettlementTransactionWhereInput, { nullable: true })
  @Type(() => SettlementTransactionWhereInput)
  where?: SettlementTransactionWhereInput;
}
