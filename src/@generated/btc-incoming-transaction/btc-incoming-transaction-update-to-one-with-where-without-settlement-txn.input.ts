import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BTCIncomingTransactionWhereInput } from './btc-incoming-transaction-where.input';
import { Type } from 'class-transformer';
import { BTCIncomingTransactionUpdateWithoutSettlementTxnInput } from './btc-incoming-transaction-update-without-settlement-txn.input';

@InputType()
export class BTCIncomingTransactionUpdateToOneWithWhereWithoutSettlementTxnInput {

    @Field(() => BTCIncomingTransactionWhereInput, {nullable:true})
    @Type(() => BTCIncomingTransactionWhereInput)
    where?: BTCIncomingTransactionWhereInput;

    @Field(() => BTCIncomingTransactionUpdateWithoutSettlementTxnInput, {nullable:false})
    @Type(() => BTCIncomingTransactionUpdateWithoutSettlementTxnInput)
    data!: BTCIncomingTransactionUpdateWithoutSettlementTxnInput;
}
