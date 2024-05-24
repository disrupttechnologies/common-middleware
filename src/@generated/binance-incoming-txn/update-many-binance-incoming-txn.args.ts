import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BinanceIncomingTxnUpdateManyMutationInput } from './binance-incoming-txn-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BinanceIncomingTxnWhereInput } from './binance-incoming-txn-where.input';

@ArgsType()
export class UpdateManyBinanceIncomingTxnArgs {
  @Field(() => BinanceIncomingTxnUpdateManyMutationInput, { nullable: false })
  @Type(() => BinanceIncomingTxnUpdateManyMutationInput)
  data!: BinanceIncomingTxnUpdateManyMutationInput;

  @Field(() => BinanceIncomingTxnWhereInput, { nullable: true })
  @Type(() => BinanceIncomingTxnWhereInput)
  where?: BinanceIncomingTxnWhereInput;
}
