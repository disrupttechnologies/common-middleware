import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BTCIncomingTransactionUpdateManyWithoutUserNestedInput } from '../btc-incoming-transaction/btc-incoming-transaction-update-many-without-user-nested.input';

@InputType()
export class UserBTCAddressUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    whitelabelId?: string;

    @Field(() => BTCIncomingTransactionUpdateManyWithoutUserNestedInput, {nullable:true})
    txns?: BTCIncomingTransactionUpdateManyWithoutUserNestedInput;
}
