import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SyncDetailsWhereInput } from './sync-details-where.input';
import { Type } from 'class-transformer';
import { SyncDetailsOrderByWithRelationInput } from './sync-details-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SyncDetailsWhereUniqueInput } from './sync-details-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SyncDetailsCountAggregateInput } from './sync-details-count-aggregate.input';
import { SyncDetailsMinAggregateInput } from './sync-details-min-aggregate.input';
import { SyncDetailsMaxAggregateInput } from './sync-details-max-aggregate.input';

@ArgsType()
export class SyncDetailsAggregateArgs {
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

  @Field(() => SyncDetailsCountAggregateInput, { nullable: true })
  _count?: SyncDetailsCountAggregateInput;

  @Field(() => SyncDetailsMinAggregateInput, { nullable: true })
  _min?: SyncDetailsMinAggregateInput;

  @Field(() => SyncDetailsMaxAggregateInput, { nullable: true })
  _max?: SyncDetailsMaxAggregateInput;
}
