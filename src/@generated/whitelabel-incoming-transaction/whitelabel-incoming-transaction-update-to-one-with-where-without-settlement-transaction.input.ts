import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WhitelabelIncomingTransactionWhereInput } from './whitelabel-incoming-transaction-where.input';
import { Type } from 'class-transformer';
import { WhitelabelIncomingTransactionUpdateWithoutSettlementTransactionInput } from './whitelabel-incoming-transaction-update-without-settlement-transaction.input';

@InputType()
export class WhitelabelIncomingTransactionUpdateToOneWithWhereWithoutSettlementTransactionInput {

    @Field(() => WhitelabelIncomingTransactionWhereInput, {nullable:true})
    @Type(() => WhitelabelIncomingTransactionWhereInput)
    where?: WhitelabelIncomingTransactionWhereInput;

    @Field(() => WhitelabelIncomingTransactionUpdateWithoutSettlementTransactionInput, {nullable:false})
    @Type(() => WhitelabelIncomingTransactionUpdateWithoutSettlementTransactionInput)
    data!: WhitelabelIncomingTransactionUpdateWithoutSettlementTransactionInput;
}
