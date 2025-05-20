import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BTCSettlementTransactionCreateWithoutIncomingTxnInput } from './btc-settlement-transaction-create-without-incoming-txn.input';
import { Type } from 'class-transformer';
import { BTCSettlementTransactionCreateOrConnectWithoutIncomingTxnInput } from './btc-settlement-transaction-create-or-connect-without-incoming-txn.input';
import { Prisma } from '@prisma/client';
import { BTCSettlementTransactionWhereUniqueInput } from './btc-settlement-transaction-where-unique.input';

@InputType()
export class BTCSettlementTransactionUncheckedCreateNestedOneWithoutIncomingTxnInput {

    @Field(() => BTCSettlementTransactionCreateWithoutIncomingTxnInput, {nullable:true})
    @Type(() => BTCSettlementTransactionCreateWithoutIncomingTxnInput)
    create?: BTCSettlementTransactionCreateWithoutIncomingTxnInput;

    @Field(() => BTCSettlementTransactionCreateOrConnectWithoutIncomingTxnInput, {nullable:true})
    @Type(() => BTCSettlementTransactionCreateOrConnectWithoutIncomingTxnInput)
    connectOrCreate?: BTCSettlementTransactionCreateOrConnectWithoutIncomingTxnInput;

    @Field(() => BTCSettlementTransactionWhereUniqueInput, {nullable:true})
    @Type(() => BTCSettlementTransactionWhereUniqueInput)
    connect?: Prisma.AtLeast<BTCSettlementTransactionWhereUniqueInput, 'id' | 'incomingTxnId' | 'orderId'>;
}
