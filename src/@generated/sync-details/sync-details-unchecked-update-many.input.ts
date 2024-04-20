import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SyncDetailsUncheckedUpdateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    lastSyncedAt?: Date | string;

    @Field(() => String, {nullable:true})
    actionName?: string;

    @Field(() => String, {nullable:true})
    metadata?: string;
}
