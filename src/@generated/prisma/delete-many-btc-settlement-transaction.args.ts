import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BTCSettlementTransactionWhereInput } from '../btc-settlement-transaction/btc-settlement-transaction-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBtcSettlementTransactionArgs {
  @Field(() => BTCSettlementTransactionWhereInput, { nullable: true })
  @Type(() => BTCSettlementTransactionWhereInput)
  where?: BTCSettlementTransactionWhereInput;
}
