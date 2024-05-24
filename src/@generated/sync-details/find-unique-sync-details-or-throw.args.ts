import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SyncDetailsWhereUniqueInput } from './sync-details-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueSyncDetailsOrThrowArgs {
  @Field(() => SyncDetailsWhereUniqueInput, { nullable: false })
  @Type(() => SyncDetailsWhereUniqueInput)
  where!: Prisma.AtLeast<SyncDetailsWhereUniqueInput, 'id' | 'actionName'>;
}
