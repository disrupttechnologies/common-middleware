import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SyncDetailsWhereInput } from './sync-details-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class SyncDetailsWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  actionName?: string;

  @Field(() => [SyncDetailsWhereInput], { nullable: true })
  AND?: Array<SyncDetailsWhereInput>;

  @Field(() => [SyncDetailsWhereInput], { nullable: true })
  OR?: Array<SyncDetailsWhereInput>;

  @Field(() => [SyncDetailsWhereInput], { nullable: true })
  NOT?: Array<SyncDetailsWhereInput>;

  @Field(() => DateTimeFilter, { nullable: true })
  lastSyncedAt?: DateTimeFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  metadata?: StringNullableFilter;
}
