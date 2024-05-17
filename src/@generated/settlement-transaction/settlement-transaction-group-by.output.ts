import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SettlementTransactionProcessStatus } from '../prisma/settlement-transaction-process-status.enum';
import { SettlementTransactionCountAggregate } from './settlement-transaction-count-aggregate.output';
import { SettlementTransactionMinAggregate } from './settlement-transaction-min-aggregate.output';
import { SettlementTransactionMaxAggregate } from './settlement-transaction-max-aggregate.output';

@ObjectType()
export class SettlementTransactionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    orderId?: string;

    @Field(() => Date, {nullable:true})
    orderplaceTime?: Date | string;

    @Field(() => String, {nullable:true})
    amountReceived?: string;

    @Field(() => SettlementTransactionProcessStatus, {nullable:false})
    status!: keyof typeof SettlementTransactionProcessStatus;

    @Field(() => SettlementTransactionCountAggregate, {nullable:true})
    _count?: SettlementTransactionCountAggregate;

    @Field(() => SettlementTransactionMinAggregate, {nullable:true})
    _min?: SettlementTransactionMinAggregate;

    @Field(() => SettlementTransactionMaxAggregate, {nullable:true})
    _max?: SettlementTransactionMaxAggregate;
}
