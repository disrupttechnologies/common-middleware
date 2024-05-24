import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BTCIncomingTransactionWhereInput } from '../btc-incoming-transaction/btc-incoming-transaction-where.input';
import { Type } from 'class-transformer';
import { BTCIncomingTransactionOrderByWithAggregationInput } from '../btc-incoming-transaction/btc-incoming-transaction-order-by-with-aggregation.input';
import { BTCIncomingTransactionScalarFieldEnum } from '../btc-incoming-transaction/btc-incoming-transaction-scalar-field.enum';
import { BTCIncomingTransactionScalarWhereWithAggregatesInput } from '../btc-incoming-transaction/btc-incoming-transaction-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByBtcIncomingTransactionArgs {
  @Field(() => BTCIncomingTransactionWhereInput, { nullable: true })
  @Type(() => BTCIncomingTransactionWhereInput)
  where?: BTCIncomingTransactionWhereInput;

  @Field(() => [BTCIncomingTransactionOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<BTCIncomingTransactionOrderByWithAggregationInput>;

  @Field(() => [BTCIncomingTransactionScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof BTCIncomingTransactionScalarFieldEnum>;

  @Field(() => BTCIncomingTransactionScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: BTCIncomingTransactionScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
