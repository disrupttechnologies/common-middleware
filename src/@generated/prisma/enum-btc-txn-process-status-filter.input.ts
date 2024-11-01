import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BTCTxnProcessStatus } from './btc-txn-process-status.enum';
import { NestedEnumBTCTxnProcessStatusFilter } from './nested-enum-btc-txn-process-status-filter.input';

@InputType()
export class EnumBTCTxnProcessStatusFilter {

    @Field(() => BTCTxnProcessStatus, {nullable:true})
    equals?: keyof typeof BTCTxnProcessStatus;

    @Field(() => [BTCTxnProcessStatus], {nullable:true})
    in?: Array<keyof typeof BTCTxnProcessStatus>;

    @Field(() => [BTCTxnProcessStatus], {nullable:true})
    notIn?: Array<keyof typeof BTCTxnProcessStatus>;

    @Field(() => NestedEnumBTCTxnProcessStatusFilter, {nullable:true})
    not?: NestedEnumBTCTxnProcessStatusFilter;
}
