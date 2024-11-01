import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SyncDetailsWhereInput } from './sync-details-where.input';
import { Type } from 'class-transformer';
import { SyncDetailsOrderByWithAggregationInput } from './sync-details-order-by-with-aggregation.input';
import { SyncDetailsScalarFieldEnum } from './sync-details-scalar-field.enum';
import { SyncDetailsScalarWhereWithAggregatesInput } from './sync-details-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SyncDetailsCountAggregateInput } from './sync-details-count-aggregate.input';
import { SyncDetailsMinAggregateInput } from './sync-details-min-aggregate.input';
import { SyncDetailsMaxAggregateInput } from './sync-details-max-aggregate.input';

@ArgsType()
export class SyncDetailsGroupByArgs {

    @Field(() => SyncDetailsWhereInput, {nullable:true})
    @Type(() => SyncDetailsWhereInput)
    where?: SyncDetailsWhereInput;

    @Field(() => [SyncDetailsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SyncDetailsOrderByWithAggregationInput>;

    @Field(() => [SyncDetailsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SyncDetailsScalarFieldEnum>;

    @Field(() => SyncDetailsScalarWhereWithAggregatesInput, {nullable:true})
    having?: SyncDetailsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SyncDetailsCountAggregateInput, {nullable:true})
    _count?: SyncDetailsCountAggregateInput;

    @Field(() => SyncDetailsMinAggregateInput, {nullable:true})
    _min?: SyncDetailsMinAggregateInput;

    @Field(() => SyncDetailsMaxAggregateInput, {nullable:true})
    _max?: SyncDetailsMaxAggregateInput;
}
