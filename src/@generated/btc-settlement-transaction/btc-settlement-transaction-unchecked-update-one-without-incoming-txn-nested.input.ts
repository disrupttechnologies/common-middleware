import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BTCSettlementTransactionCreateWithoutIncomingTxnInput } from './btc-settlement-transaction-create-without-incoming-txn.input';
import { Type } from 'class-transformer';
import { BTCSettlementTransactionCreateOrConnectWithoutIncomingTxnInput } from './btc-settlement-transaction-create-or-connect-without-incoming-txn.input';
import { BTCSettlementTransactionUpsertWithoutIncomingTxnInput } from './btc-settlement-transaction-upsert-without-incoming-txn.input';
import { BTCSettlementTransactionWhereInput } from './btc-settlement-transaction-where.input';
import { Prisma } from '@prisma/client';
import { BTCSettlementTransactionWhereUniqueInput } from './btc-settlement-transaction-where-unique.input';
import { BTCSettlementTransactionUpdateToOneWithWhereWithoutIncomingTxnInput } from './btc-settlement-transaction-update-to-one-with-where-without-incoming-txn.input';

@InputType()
export class BTCSettlementTransactionUncheckedUpdateOneWithoutIncomingTxnNestedInput {

    @Field(() => BTCSettlementTransactionCreateWithoutIncomingTxnInput, {nullable:true})
    @Type(() => BTCSettlementTransactionCreateWithoutIncomingTxnInput)
    create?: BTCSettlementTransactionCreateWithoutIncomingTxnInput;

    @Field(() => BTCSettlementTransactionCreateOrConnectWithoutIncomingTxnInput, {nullable:true})
    @Type(() => BTCSettlementTransactionCreateOrConnectWithoutIncomingTxnInput)
    connectOrCreate?: BTCSettlementTransactionCreateOrConnectWithoutIncomingTxnInput;

    @Field(() => BTCSettlementTransactionUpsertWithoutIncomingTxnInput, {nullable:true})
    @Type(() => BTCSettlementTransactionUpsertWithoutIncomingTxnInput)
    upsert?: BTCSettlementTransactionUpsertWithoutIncomingTxnInput;

    @Field(() => BTCSettlementTransactionWhereInput, {nullable:true})
    @Type(() => BTCSettlementTransactionWhereInput)
    disconnect?: BTCSettlementTransactionWhereInput;

    @Field(() => BTCSettlementTransactionWhereInput, {nullable:true})
    @Type(() => BTCSettlementTransactionWhereInput)
    delete?: BTCSettlementTransactionWhereInput;

    @Field(() => BTCSettlementTransactionWhereUniqueInput, {nullable:true})
    @Type(() => BTCSettlementTransactionWhereUniqueInput)
    connect?: Prisma.AtLeast<BTCSettlementTransactionWhereUniqueInput, 'id' | 'incomingTxnId' | 'orderId'>;

    @Field(() => BTCSettlementTransactionUpdateToOneWithWhereWithoutIncomingTxnInput, {nullable:true})
    @Type(() => BTCSettlementTransactionUpdateToOneWithWhereWithoutIncomingTxnInput)
    update?: BTCSettlementTransactionUpdateToOneWithWhereWithoutIncomingTxnInput;
}
