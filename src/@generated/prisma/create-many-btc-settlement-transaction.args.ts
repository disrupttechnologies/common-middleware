import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BTCSettlementTransactionCreateManyInput } from '../btc-settlement-transaction/btc-settlement-transaction-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBtcSettlementTransactionArgs {
  @Field(() => [BTCSettlementTransactionCreateManyInput], { nullable: false })
  @Type(() => BTCSettlementTransactionCreateManyInput)
  data!: Array<BTCSettlementTransactionCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
