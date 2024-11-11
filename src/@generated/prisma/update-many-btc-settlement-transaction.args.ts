import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BTCSettlementTransactionUpdateManyMutationInput } from '../btc-settlement-transaction/btc-settlement-transaction-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BTCSettlementTransactionWhereInput } from '../btc-settlement-transaction/btc-settlement-transaction-where.input';

@ArgsType()
export class UpdateManyBtcSettlementTransactionArgs {
  @Field(() => BTCSettlementTransactionUpdateManyMutationInput, {
    nullable: false,
  })
  @Type(() => BTCSettlementTransactionUpdateManyMutationInput)
  data!: BTCSettlementTransactionUpdateManyMutationInput;

  @Field(() => BTCSettlementTransactionWhereInput, { nullable: true })
  @Type(() => BTCSettlementTransactionWhereInput)
  where?: BTCSettlementTransactionWhereInput;
}
