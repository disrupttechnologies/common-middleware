import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class SyncDetailsScalarWhereWithAggregatesInput {

    @Field(() => [SyncDetailsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SyncDetailsScalarWhereWithAggregatesInput>;

    @Field(() => [SyncDetailsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SyncDetailsScalarWhereWithAggregatesInput>;

    @Field(() => [SyncDetailsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SyncDetailsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    lastSyncedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    actionName?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    metadata?: StringNullableWithAggregatesFilter;
}
