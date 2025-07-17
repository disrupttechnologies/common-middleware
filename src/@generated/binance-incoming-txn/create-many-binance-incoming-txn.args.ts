import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BinanceIncomingTxnCreateManyInput } from './binance-incoming-txn-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBinanceIncomingTxnArgs {

    @Field(() => [BinanceIncomingTxnCreateManyInput], {nullable:false})
    @Type(() => BinanceIncomingTxnCreateManyInput)
    data!: Array<BinanceIncomingTxnCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
