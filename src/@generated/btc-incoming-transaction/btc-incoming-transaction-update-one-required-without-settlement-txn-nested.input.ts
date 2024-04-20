import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BTCIncomingTransactionCreateWithoutSettlementTxnInput } from './btc-incoming-transaction-create-without-settlement-txn.input';
import { Type } from 'class-transformer';
import { BTCIncomingTransactionCreateOrConnectWithoutSettlementTxnInput } from './btc-incoming-transaction-create-or-connect-without-settlement-txn.input';
import { BTCIncomingTransactionUpsertWithoutSettlementTxnInput } from './btc-incoming-transaction-upsert-without-settlement-txn.input';
import { Prisma } from '@prisma/client';
import { BTCIncomingTransactionWhereUniqueInput } from './btc-incoming-transaction-where-unique.input';
import { BTCIncomingTransactionUpdateToOneWithWhereWithoutSettlementTxnInput } from './btc-incoming-transaction-update-to-one-with-where-without-settlement-txn.input';

@InputType()
export class BTCIncomingTransactionUpdateOneRequiredWithoutSettlementTxnNestedInput {

    @Field(() => BTCIncomingTransactionCreateWithoutSettlementTxnInput, {nullable:true})
    @Type(() => BTCIncomingTransactionCreateWithoutSettlementTxnInput)
    create?: BTCIncomingTransactionCreateWithoutSettlementTxnInput;

    @Field(() => BTCIncomingTransactionCreateOrConnectWithoutSettlementTxnInput, {nullable:true})
    @Type(() => BTCIncomingTransactionCreateOrConnectWithoutSettlementTxnInput)
    connectOrCreate?: BTCIncomingTransactionCreateOrConnectWithoutSettlementTxnInput;

    @Field(() => BTCIncomingTransactionUpsertWithoutSettlementTxnInput, {nullable:true})
    @Type(() => BTCIncomingTransactionUpsertWithoutSettlementTxnInput)
    upsert?: BTCIncomingTransactionUpsertWithoutSettlementTxnInput;

    @Field(() => BTCIncomingTransactionWhereUniqueInput, {nullable:true})
    @Type(() => BTCIncomingTransactionWhereUniqueInput)
    connect?: Prisma.AtLeast<BTCIncomingTransactionWhereUniqueInput, 'id' | 'txnHash' | 'binanceTxnId'>;

    @Field(() => BTCIncomingTransactionUpdateToOneWithWhereWithoutSettlementTxnInput, {nullable:true})
    @Type(() => BTCIncomingTransactionUpdateToOneWithWhereWithoutSettlementTxnInput)
    update?: BTCIncomingTransactionUpdateToOneWithWhereWithoutSettlementTxnInput;
}
