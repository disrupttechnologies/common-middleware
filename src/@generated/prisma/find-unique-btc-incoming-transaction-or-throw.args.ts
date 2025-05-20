import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BTCIncomingTransactionWhereUniqueInput } from '../btc-incoming-transaction/btc-incoming-transaction-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueBtcIncomingTransactionOrThrowArgs {

    @Field(() => BTCIncomingTransactionWhereUniqueInput, {nullable:false})
    @Type(() => BTCIncomingTransactionWhereUniqueInput)
    where!: BTCIncomingTransactionWhereUniqueInput;
}
