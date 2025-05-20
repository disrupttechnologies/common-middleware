import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class SyncDetailsWhereInput {
  @Field(() => [SyncDetailsWhereInput], { nullable: true })
  AND?: Array<SyncDetailsWhereInput>;

  @Field(() => [SyncDetailsWhereInput], { nullable: true })
  OR?: Array<SyncDetailsWhereInput>;

  @Field(() => [SyncDetailsWhereInput], { nullable: true })
  NOT?: Array<SyncDetailsWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  lastSyncedAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  actionName?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  metadata?: StringNullableFilter;
}
