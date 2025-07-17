import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BTCIncomingTransactionUncheckedUpdateManyWithoutUserNestedInput } from '../btc-incoming-transaction/btc-incoming-transaction-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserBTCAddressUncheckedUpdateInput {

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

    @Field(() => BTCIncomingTransactionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    txns?: BTCIncomingTransactionUncheckedUpdateManyWithoutUserNestedInput;
}
