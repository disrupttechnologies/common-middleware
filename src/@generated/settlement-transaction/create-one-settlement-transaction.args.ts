import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettlementTransactionCreateInput } from './settlement-transaction-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSettlementTransactionArgs {

    @Field(() => SettlementTransactionCreateInput, {nullable:false})
    @Type(() => SettlementTransactionCreateInput)
    data!: SettlementTransactionCreateInput;
}
