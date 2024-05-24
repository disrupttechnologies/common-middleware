import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SyncDetailsCreateManyInput } from './sync-details-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySyncDetailsArgs {
  @Field(() => [SyncDetailsCreateManyInput], { nullable: false })
  @Type(() => SyncDetailsCreateManyInput)
  data!: Array<SyncDetailsCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
