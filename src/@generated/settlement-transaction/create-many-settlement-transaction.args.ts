import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettlementTransactionCreateManyInput } from './settlement-transaction-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySettlementTransactionArgs {
  @Field(() => [SettlementTransactionCreateManyInput], { nullable: false })
  @Type(() => SettlementTransactionCreateManyInput)
  data!: Array<SettlementTransactionCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
