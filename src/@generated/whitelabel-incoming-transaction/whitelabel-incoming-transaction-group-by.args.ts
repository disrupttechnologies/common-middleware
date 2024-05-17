import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WhitelabelIncomingTransactionWhereInput } from './whitelabel-incoming-transaction-where.input';
import { Type } from 'class-transformer';
import { WhitelabelIncomingTransactionOrderByWithAggregationInput } from './whitelabel-incoming-transaction-order-by-with-aggregation.input';
import { WhitelabelIncomingTransactionScalarFieldEnum } from './whitelabel-incoming-transaction-scalar-field.enum';
import { WhitelabelIncomingTransactionScalarWhereWithAggregatesInput } from './whitelabel-incoming-transaction-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { WhitelabelIncomingTransactionCountAggregateInput } from './whitelabel-incoming-transaction-count-aggregate.input';
import { WhitelabelIncomingTransactionMinAggregateInput } from './whitelabel-incoming-transaction-min-aggregate.input';
import { WhitelabelIncomingTransactionMaxAggregateInput } from './whitelabel-incoming-transaction-max-aggregate.input';

@ArgsType()
export class WhitelabelIncomingTransactionGroupByArgs {

    @Field(() => WhitelabelIncomingTransactionWhereInput, {nullable:true})
    @Type(() => WhitelabelIncomingTransactionWhereInput)
    where?: WhitelabelIncomingTransactionWhereInput;

    @Field(() => [WhitelabelIncomingTransactionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<WhitelabelIncomingTransactionOrderByWithAggregationInput>;

    @Field(() => [WhitelabelIncomingTransactionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof WhitelabelIncomingTransactionScalarFieldEnum>;

    @Field(() => WhitelabelIncomingTransactionScalarWhereWithAggregatesInput, {nullable:true})
    having?: WhitelabelIncomingTransactionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => WhitelabelIncomingTransactionCountAggregateInput, {nullable:true})
    _count?: WhitelabelIncomingTransactionCountAggregateInput;

    @Field(() => WhitelabelIncomingTransactionMinAggregateInput, {nullable:true})
    _min?: WhitelabelIncomingTransactionMinAggregateInput;

    @Field(() => WhitelabelIncomingTransactionMaxAggregateInput, {nullable:true})
    _max?: WhitelabelIncomingTransactionMaxAggregateInput;
}
