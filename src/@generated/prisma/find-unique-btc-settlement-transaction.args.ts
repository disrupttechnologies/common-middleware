import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BTCSettlementTransactionWhereUniqueInput } from '../btc-settlement-transaction/btc-settlement-transaction-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueBtcSettlementTransactionArgs {
  @Field(() => BTCSettlementTransactionWhereUniqueInput, { nullable: false })
  @Type(() => BTCSettlementTransactionWhereUniqueInput)
  where!: BTCSettlementTransactionWhereUniqueInput;
}
