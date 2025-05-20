import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SyncDetailsMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    lastSyncedAt?: true;

    @Field(() => Boolean, {nullable:true})
    actionName?: true;

    @Field(() => Boolean, {nullable:true})
    metadata?: true;
}
