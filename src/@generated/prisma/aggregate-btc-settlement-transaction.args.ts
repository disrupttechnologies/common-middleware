import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BTCSettlementTransactionWhereInput } from '../btc-settlement-transaction/btc-settlement-transaction-where.input';
import { Type } from 'class-transformer';
import { BTCSettlementTransactionOrderByWithRelationInput } from '../btc-settlement-transaction/btc-settlement-transaction-order-by-with-relation.input';
import { BTCSettlementTransactionWhereUniqueInput } from '../btc-settlement-transaction/btc-settlement-transaction-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateBtcSettlementTransactionArgs {

    @Field(() => BTCSettlementTransactionWhereInput, {nullable:true})
    @Type(() => BTCSettlementTransactionWhereInput)
    where?: BTCSettlementTransactionWhereInput;

    @Field(() => [BTCSettlementTransactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BTCSettlementTransactionOrderByWithRelationInput>;

    @Field(() => BTCSettlementTransactionWhereUniqueInput, {nullable:true})
    cursor?: BTCSettlementTransactionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
