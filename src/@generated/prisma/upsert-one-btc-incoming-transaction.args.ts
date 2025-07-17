import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BTCIncomingTransactionWhereUniqueInput } from '../btc-incoming-transaction/btc-incoming-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { BTCIncomingTransactionCreateInput } from '../btc-incoming-transaction/btc-incoming-transaction-create.input';
import { BTCIncomingTransactionUpdateInput } from '../btc-incoming-transaction/btc-incoming-transaction-update.input';

@ArgsType()
export class UpsertOneBtcIncomingTransactionArgs {

    @Field(() => BTCIncomingTransactionWhereUniqueInput, {nullable:false})
    @Type(() => BTCIncomingTransactionWhereUniqueInput)
    where!: BTCIncomingTransactionWhereUniqueInput;

    @Field(() => BTCIncomingTransactionCreateInput, {nullable:false})
    @Type(() => BTCIncomingTransactionCreateInput)
    create!: BTCIncomingTransactionCreateInput;

    @Field(() => BTCIncomingTransactionUpdateInput, {nullable:false})
    @Type(() => BTCIncomingTransactionUpdateInput)
    update!: BTCIncomingTransactionUpdateInput;
}
