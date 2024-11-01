import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettlementTransactionWhereInput } from './settlement-transaction-where.input';
import { Type } from 'class-transformer';
import { SettlementTransactionOrderByWithRelationInput } from './settlement-transaction-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SettlementTransactionWhereUniqueInput } from './settlement-transaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SettlementTransactionCountAggregateInput } from './settlement-transaction-count-aggregate.input';
import { SettlementTransactionMinAggregateInput } from './settlement-transaction-min-aggregate.input';
import { SettlementTransactionMaxAggregateInput } from './settlement-transaction-max-aggregate.input';

@ArgsType()
export class SettlementTransactionAggregateArgs {

    @Field(() => SettlementTransactionWhereInput, {nullable:true})
    @Type(() => SettlementTransactionWhereInput)
    where?: SettlementTransactionWhereInput;

    @Field(() => [SettlementTransactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SettlementTransactionOrderByWithRelationInput>;

    @Field(() => SettlementTransactionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SettlementTransactionWhereUniqueInput, 'id' | 'orderId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SettlementTransactionCountAggregateInput, {nullable:true})
    _count?: SettlementTransactionCountAggregateInput;

    @Field(() => SettlementTransactionMinAggregateInput, {nullable:true})
    _min?: SettlementTransactionMinAggregateInput;

    @Field(() => SettlementTransactionMaxAggregateInput, {nullable:true})
    _max?: SettlementTransactionMaxAggregateInput;
}
