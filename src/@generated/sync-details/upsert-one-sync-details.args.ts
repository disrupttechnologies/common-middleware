import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SyncDetailsWhereUniqueInput } from './sync-details-where-unique.input';
import { Type } from 'class-transformer';
import { SyncDetailsCreateInput } from './sync-details-create.input';
import { SyncDetailsUpdateInput } from './sync-details-update.input';

@ArgsType()
export class UpsertOneSyncDetailsArgs {
  @Field(() => SyncDetailsWhereUniqueInput, { nullable: false })
  @Type(() => SyncDetailsWhereUniqueInput)
  where!: Prisma.AtLeast<SyncDetailsWhereUniqueInput, 'id' | 'actionName'>;

  @Field(() => SyncDetailsCreateInput, { nullable: false })
  @Type(() => SyncDetailsCreateInput)
  create!: SyncDetailsCreateInput;

  @Field(() => SyncDetailsUpdateInput, { nullable: false })
  @Type(() => SyncDetailsUpdateInput)
  update!: SyncDetailsUpdateInput;
}
