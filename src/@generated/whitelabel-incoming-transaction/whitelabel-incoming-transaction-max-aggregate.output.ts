import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class WhitelabelIncomingTransactionMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    whitelabelId?: string;

    @Field(() => String, {nullable:true})
    provisionTxnHash?: string;

    @Field(() => String, {nullable:true})
    settlementTransactionId?: string;
}
