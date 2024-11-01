import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BTCIncomingTransactionUncheckedCreateNestedManyWithoutUserInput } from '../btc-incoming-transaction/btc-incoming-transaction-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserBTCAddressUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    whitelabelId!: string;

    @Field(() => BTCIncomingTransactionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    txns?: BTCIncomingTransactionUncheckedCreateNestedManyWithoutUserInput;
}
