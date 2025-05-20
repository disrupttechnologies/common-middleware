import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SyncDetailsCreateInput } from './sync-details-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSyncDetailsArgs {
  @Field(() => SyncDetailsCreateInput, { nullable: false })
  @Type(() => SyncDetailsCreateInput)
  data!: SyncDetailsCreateInput;
}
