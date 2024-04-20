import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BTCSettlementTransactionWhereInput } from './btc-settlement-transaction-where.input';
import { Type } from 'class-transformer';
import { BTCSettlementTransactionUpdateWithoutIncomingTxnInput } from './btc-settlement-transaction-update-without-incoming-txn.input';

@InputType()
export class BTCSettlementTransactionUpdateToOneWithWhereWithoutIncomingTxnInput {

    @Field(() => BTCSettlementTransactionWhereInput, {nullable:true})
    @Type(() => BTCSettlementTransactionWhereInput)
    where?: BTCSettlementTransactionWhereInput;

    @Field(() => BTCSettlementTransactionUpdateWithoutIncomingTxnInput, {nullable:false})
    @Type(() => BTCSettlementTransactionUpdateWithoutIncomingTxnInput)
    data!: BTCSettlementTransactionUpdateWithoutIncomingTxnInput;
}
