import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TxnStatus } from './txn-status.enum';
import { NestedEnumTxnStatusNullableWithAggregatesFilter } from './nested-enum-txn-status-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumTxnStatusNullableFilter } from './nested-enum-txn-status-nullable-filter.input';

@InputType()
export class EnumTxnStatusNullableWithAggregatesFilter {

    @Field(() => TxnStatus, {nullable:true})
    equals?: keyof typeof TxnStatus;

    @Field(() => [TxnStatus], {nullable:true})
    in?: Array<keyof typeof TxnStatus>;

    @Field(() => [TxnStatus], {nullable:true})
    notIn?: Array<keyof typeof TxnStatus>;

    @Field(() => NestedEnumTxnStatusNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTxnStatusNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumTxnStatusNullableFilter, {nullable:true})
    _min?: NestedEnumTxnStatusNullableFilter;

    @Field(() => NestedEnumTxnStatusNullableFilter, {nullable:true})
    _max?: NestedEnumTxnStatusNullableFilter;
}
