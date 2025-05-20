import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementTransactionProcessStatus } from './settlement-transaction-process-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumSettlementTransactionProcessStatusFilter } from './nested-enum-settlement-transaction-process-status-filter.input';

@InputType()
export class NestedEnumSettlementTransactionProcessStatusWithAggregatesFilter {
  @Field(() => SettlementTransactionProcessStatus, { nullable: true })
  equals?: keyof typeof SettlementTransactionProcessStatus;

  @Field(() => [SettlementTransactionProcessStatus], { nullable: true })
  in?: Array<keyof typeof SettlementTransactionProcessStatus>;

  @Field(() => [SettlementTransactionProcessStatus], { nullable: true })
  notIn?: Array<keyof typeof SettlementTransactionProcessStatus>;

  @Field(
    () => NestedEnumSettlementTransactionProcessStatusWithAggregatesFilter,
    { nullable: true },
  )
  not?: NestedEnumSettlementTransactionProcessStatusWithAggregatesFilter;

  @Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter;

  @Field(() => NestedEnumSettlementTransactionProcessStatusFilter, {
    nullable: true,
  })
  _min?: NestedEnumSettlementTransactionProcessStatusFilter;

  @Field(() => NestedEnumSettlementTransactionProcessStatusFilter, {
    nullable: true,
  })
  _max?: NestedEnumSettlementTransactionProcessStatusFilter;
}
