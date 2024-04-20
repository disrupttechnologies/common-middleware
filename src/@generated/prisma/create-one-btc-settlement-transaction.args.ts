import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BTCSettlementTransactionCreateInput } from '../btc-settlement-transaction/btc-settlement-transaction-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBtcSettlementTransactionArgs {

    @Field(() => BTCSettlementTransactionCreateInput, {nullable:false})
    @Type(() => BTCSettlementTransactionCreateInput)
    data!: BTCSettlementTransactionCreateInput;
}
