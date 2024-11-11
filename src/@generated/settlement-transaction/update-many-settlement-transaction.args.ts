import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettlementTransactionUpdateManyMutationInput } from './settlement-transaction-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SettlementTransactionWhereInput } from './settlement-transaction-where.input';

@ArgsType()
export class UpdateManySettlementTransactionArgs {
  @Field(() => SettlementTransactionUpdateManyMutationInput, {
    nullable: false,
  })
  @Type(() => SettlementTransactionUpdateManyMutationInput)
  data!: SettlementTransactionUpdateManyMutationInput;

  @Field(() => SettlementTransactionWhereInput, { nullable: true })
  @Type(() => SettlementTransactionWhereInput)
  where?: SettlementTransactionWhereInput;
}
