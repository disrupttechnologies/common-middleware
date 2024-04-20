import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class SyncDetails {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    lastSyncedAt!: Date;

    @Field(() => String, {nullable:false})
    actionName!: string;

    @Field(() => String, {nullable:true})
    metadata!: string | null;
}
