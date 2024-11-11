import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BinanceIncomingTxnCreateInput } from './binance-incoming-txn-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBinanceIncomingTxnArgs {
  @Field(() => BinanceIncomingTxnCreateInput, { nullable: false })
  @Type(() => BinanceIncomingTxnCreateInput)
  data!: BinanceIncomingTxnCreateInput;
}
