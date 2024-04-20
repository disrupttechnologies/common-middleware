import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BTCIncomingTransactionUpdateInput } from '../btc-incoming-transaction/btc-incoming-transaction-update.input';
import { Type } from 'class-transformer';
import { BTCIncomingTransactionWhereUniqueInput } from '../btc-incoming-transaction/btc-incoming-transaction-where-unique.input';

@ArgsType()
export class UpdateOneBtcIncomingTransactionArgs {

    @Field(() => BTCIncomingTransactionUpdateInput, {nullable:false})
    @Type(() => BTCIncomingTransactionUpdateInput)
    data!: BTCIncomingTransactionUpdateInput;

    @Field(() => BTCIncomingTransactionWhereUniqueInput, {nullable:false})
    @Type(() => BTCIncomingTransactionWhereUniqueInput)
    where!: BTCIncomingTransactionWhereUniqueInput;
}
