import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SyncDetailsWhereInput } from './sync-details-where.input';
import { Type } from 'class-transformer';
import { SyncDetailsOrderByWithRelationInput } from './sync-details-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SyncDetailsWhereUniqueInput } from './sync-details-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SyncDetailsScalarFieldEnum } from './sync-details-scalar-field.enum';

@ArgsType()
export class FindFirstSyncDetailsArgs {
  @Field(() => SyncDetailsWhereInput, { nullable: true })
  @Type(() => SyncDetailsWhereInput)
  where?: SyncDetailsWhereInput;

  @Field(() => [SyncDetailsOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<SyncDetailsOrderByWithRelationInput>;

  @Field(() => SyncDetailsWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<SyncDetailsWhereUniqueInput, 'id' | 'actionName'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [SyncDetailsScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof SyncDetailsScalarFieldEnum>;
}
