import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IncomingTxnStatus } from './incoming-txn-status.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumIncomingTxnStatusNullableFilter } from './nested-enum-incoming-txn-status-nullable-filter.input';

@InputType()
export class NestedEnumIncomingTxnStatusNullableWithAggregatesFilter {
  @Field(() => IncomingTxnStatus, { nullable: true })
  equals?: keyof typeof IncomingTxnStatus;

  @Field(() => [IncomingTxnStatus], { nullable: true })
  in?: Array<keyof typeof IncomingTxnStatus>;

  @Field(() => [IncomingTxnStatus], { nullable: true })
  notIn?: Array<keyof typeof IncomingTxnStatus>;

  @Field(() => NestedEnumIncomingTxnStatusNullableWithAggregatesFilter, {
    nullable: true,
  })
  not?: NestedEnumIncomingTxnStatusNullableWithAggregatesFilter;

  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: NestedIntNullableFilter;

  @Field(() => NestedEnumIncomingTxnStatusNullableFilter, { nullable: true })
  _min?: NestedEnumIncomingTxnStatusNullableFilter;

  @Field(() => NestedEnumIncomingTxnStatusNullableFilter, { nullable: true })
  _max?: NestedEnumIncomingTxnStatusNullableFilter;
}
