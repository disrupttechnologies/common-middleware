import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SettlementTransactionProcessStatus } from '../prisma/settlement-transaction-process-status.enum';

@ObjectType()
export class SettlementTransactionMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    orderId?: string;

    @Field(() => Date, {nullable:true})
    orderplaceTime?: Date | string;

    @Field(() => String, {nullable:true})
    amountReceived?: string;

    @Field(() => SettlementTransactionProcessStatus, {nullable:true})
    status?: keyof typeof SettlementTransactionProcessStatus;
}
