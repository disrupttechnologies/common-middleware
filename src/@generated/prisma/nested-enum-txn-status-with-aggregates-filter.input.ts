import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TxnStatus } from './txn-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumTxnStatusFilter } from './nested-enum-txn-status-filter.input';

@InputType()
export class NestedEnumTxnStatusWithAggregatesFilter {

    @Field(() => TxnStatus, {nullable:true})
    equals?: keyof typeof TxnStatus;

    @Field(() => [TxnStatus], {nullable:true})
    in?: Array<keyof typeof TxnStatus>;

    @Field(() => [TxnStatus], {nullable:true})
    notIn?: Array<keyof typeof TxnStatus>;

    @Field(() => NestedEnumTxnStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTxnStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumTxnStatusFilter, {nullable:true})
    _min?: NestedEnumTxnStatusFilter;

    @Field(() => NestedEnumTxnStatusFilter, {nullable:true})
    _max?: NestedEnumTxnStatusFilter;
}
