import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BTCIncomingTransactionCreateManyInput } from '../btc-incoming-transaction/btc-incoming-transaction-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBtcIncomingTransactionArgs {

    @Field(() => [BTCIncomingTransactionCreateManyInput], {nullable:false})
    @Type(() => BTCIncomingTransactionCreateManyInput)
    data!: Array<BTCIncomingTransactionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
