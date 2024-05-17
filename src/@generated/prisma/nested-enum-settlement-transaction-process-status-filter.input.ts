import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementTransactionProcessStatus } from './settlement-transaction-process-status.enum';

@InputType()
export class NestedEnumSettlementTransactionProcessStatusFilter {

    @Field(() => SettlementTransactionProcessStatus, {nullable:true})
    equals?: keyof typeof SettlementTransactionProcessStatus;

    @Field(() => [SettlementTransactionProcessStatus], {nullable:true})
    in?: Array<keyof typeof SettlementTransactionProcessStatus>;

    @Field(() => [SettlementTransactionProcessStatus], {nullable:true})
    notIn?: Array<keyof typeof SettlementTransactionProcessStatus>;

    @Field(() => NestedEnumSettlementTransactionProcessStatusFilter, {nullable:true})
    not?: NestedEnumSettlementTransactionProcessStatusFilter;
}
