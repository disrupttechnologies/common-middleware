import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SyncDetailsUpdateManyMutationInput } from './sync-details-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SyncDetailsWhereInput } from './sync-details-where.input';

@ArgsType()
export class UpdateManySyncDetailsArgs {
  @Field(() => SyncDetailsUpdateManyMutationInput, { nullable: false })
  @Type(() => SyncDetailsUpdateManyMutationInput)
  data!: SyncDetailsUpdateManyMutationInput;

  @Field(() => SyncDetailsWhereInput, { nullable: true })
  @Type(() => SyncDetailsWhereInput)
  where?: SyncDetailsWhereInput;
}
