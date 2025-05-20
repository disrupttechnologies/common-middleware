import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SyncDetailsCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: false })
  lastSyncedAt!: Date | string;

  @Field(() => String, { nullable: false })
  actionName!: string;

  @Field(() => String, { nullable: true })
  metadata?: string;
}
