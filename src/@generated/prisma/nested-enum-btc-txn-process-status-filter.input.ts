import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BTCTxnProcessStatus } from './btc-txn-process-status.enum';

@InputType()
export class NestedEnumBTCTxnProcessStatusFilter {

    @Field(() => BTCTxnProcessStatus, {nullable:true})
    equals?: keyof typeof BTCTxnProcessStatus;

    @Field(() => [BTCTxnProcessStatus], {nullable:true})
    in?: Array<keyof typeof BTCTxnProcessStatus>;

    @Field(() => [BTCTxnProcessStatus], {nullable:true})
    notIn?: Array<keyof typeof BTCTxnProcessStatus>;

    @Field(() => NestedEnumBTCTxnProcessStatusFilter, {nullable:true})
    not?: NestedEnumBTCTxnProcessStatusFilter;
}
