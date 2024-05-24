import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SyncDetailsUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: false })
  lastSyncedAt!: Date | string;

  @Field(() => String, { nullable: false })
  actionName!: string;

  @Field(() => String, { nullable: true })
  metadata?: string;
}
