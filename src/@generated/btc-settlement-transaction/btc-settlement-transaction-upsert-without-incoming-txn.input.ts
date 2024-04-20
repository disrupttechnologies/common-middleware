import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BTCSettlementTransactionUpdateWithoutIncomingTxnInput } from './btc-settlement-transaction-update-without-incoming-txn.input';
import { Type } from 'class-transformer';
import { BTCSettlementTransactionCreateWithoutIncomingTxnInput } from './btc-settlement-transaction-create-without-incoming-txn.input';
import { BTCSettlementTransactionWhereInput } from './btc-settlement-transaction-where.input';

@InputType()
export class BTCSettlementTransactionUpsertWithoutIncomingTxnInput {

    @Field(() => BTCSettlementTransactionUpdateWithoutIncomingTxnInput, {nullable:false})
    @Type(() => BTCSettlementTransactionUpdateWithoutIncomingTxnInput)
    update!: BTCSettlementTransactionUpdateWithoutIncomingTxnInput;

    @Field(() => BTCSettlementTransactionCreateWithoutIncomingTxnInput, {nullable:false})
    @Type(() => BTCSettlementTransactionCreateWithoutIncomingTxnInput)
    create!: BTCSettlementTransactionCreateWithoutIncomingTxnInput;

    @Field(() => BTCSettlementTransactionWhereInput, {nullable:true})
    @Type(() => BTCSettlementTransactionWhereInput)
    where?: BTCSettlementTransactionWhereInput;
}
