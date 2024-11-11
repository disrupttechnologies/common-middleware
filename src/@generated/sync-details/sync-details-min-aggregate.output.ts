import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SyncDetailsMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  lastSyncedAt?: Date | string;

  @Field(() => String, { nullable: true })
  actionName?: string;

  @Field(() => String, { nullable: true })
  metadata?: string;
}
