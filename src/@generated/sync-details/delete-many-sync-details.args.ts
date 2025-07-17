import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SyncDetailsWhereInput } from './sync-details-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySyncDetailsArgs {

    @Field(() => SyncDetailsWhereInput, {nullable:true})
    @Type(() => SyncDetailsWhereInput)
    where?: SyncDetailsWhereInput;
}
