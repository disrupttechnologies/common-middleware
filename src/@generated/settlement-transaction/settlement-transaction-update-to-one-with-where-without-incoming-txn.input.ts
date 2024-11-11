import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementTransactionWhereInput } from './settlement-transaction-where.input';
import { Type } from 'class-transformer';
import { SettlementTransactionUpdateWithoutIncomingTxnInput } from './settlement-transaction-update-without-incoming-txn.input';

@InputType()
export class SettlementTransactionUpdateToOneWithWhereWithoutIncomingTxnInput {
  @Field(() => SettlementTransactionWhereInput, { nullable: true })
  @Type(() => SettlementTransactionWhereInput)
  where?: SettlementTransactionWhereInput;

  @Field(() => SettlementTransactionUpdateWithoutIncomingTxnInput, {
    nullable: false,
  })
  @Type(() => SettlementTransactionUpdateWithoutIncomingTxnInput)
  data!: SettlementTransactionUpdateWithoutIncomingTxnInput;
}
