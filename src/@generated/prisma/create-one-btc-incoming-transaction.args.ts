import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BTCIncomingTransactionCreateInput } from '../btc-incoming-transaction/btc-incoming-transaction-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBtcIncomingTransactionArgs {

    @Field(() => BTCIncomingTransactionCreateInput, {nullable:false})
    @Type(() => BTCIncomingTransactionCreateInput)
    data!: BTCIncomingTransactionCreateInput;
}
