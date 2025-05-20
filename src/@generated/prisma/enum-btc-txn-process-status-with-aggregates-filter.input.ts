import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BTCTxnProcessStatus } from './btc-txn-process-status.enum';
import { NestedEnumBTCTxnProcessStatusWithAggregatesFilter } from './nested-enum-btc-txn-process-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumBTCTxnProcessStatusFilter } from './nested-enum-btc-txn-process-status-filter.input';

@InputType()
export class EnumBTCTxnProcessStatusWithAggregatesFilter {
  @Field(() => BTCTxnProcessStatus, { nullable: true })
  equals?: keyof typeof BTCTxnProcessStatus;

  @Field(() => [BTCTxnProcessStatus], { nullable: true })
  in?: Array<keyof typeof BTCTxnProcessStatus>;

  @Field(() => [BTCTxnProcessStatus], { nullable: true })
  notIn?: Array<keyof typeof BTCTxnProcessStatus>;

  @Field(() => NestedEnumBTCTxnProcessStatusWithAggregatesFilter, {
    nullable: true,
  })
  not?: NestedEnumBTCTxnProcessStatusWithAggregatesFilter;

  @Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter;

  @Field(() => NestedEnumBTCTxnProcessStatusFilter, { nullable: true })
  _min?: NestedEnumBTCTxnProcessStatusFilter;

  @Field(() => NestedEnumBTCTxnProcessStatusFilter, { nullable: true })
  _max?: NestedEnumBTCTxnProcessStatusFilter;
}
