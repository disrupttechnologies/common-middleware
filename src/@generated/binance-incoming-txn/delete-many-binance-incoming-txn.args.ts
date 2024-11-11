import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BinanceIncomingTxnWhereInput } from './binance-incoming-txn-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBinanceIncomingTxnArgs {
  @Field(() => BinanceIncomingTxnWhereInput, { nullable: true })
  @Type(() => BinanceIncomingTxnWhereInput)
  where?: BinanceIncomingTxnWhereInput;
}
