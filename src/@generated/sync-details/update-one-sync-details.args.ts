import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SyncDetailsUpdateInput } from './sync-details-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SyncDetailsWhereUniqueInput } from './sync-details-where-unique.input';

@ArgsType()
export class UpdateOneSyncDetailsArgs {

    @Field(() => SyncDetailsUpdateInput, {nullable:false})
    @Type(() => SyncDetailsUpdateInput)
    data!: SyncDetailsUpdateInput;

    @Field(() => SyncDetailsWhereUniqueInput, {nullable:false})
    @Type(() => SyncDetailsWhereUniqueInput)
    where!: Prisma.AtLeast<SyncDetailsWhereUniqueInput, 'id' | 'actionName'>;
}
