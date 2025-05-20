import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BTCIncomingTransactionUpdateWithoutSettlementTxnInput } from './btc-incoming-transaction-update-without-settlement-txn.input';
import { Type } from 'class-transformer';
import { BTCIncomingTransactionCreateWithoutSettlementTxnInput } from './btc-incoming-transaction-create-without-settlement-txn.input';
import { BTCIncomingTransactionWhereInput } from './btc-incoming-transaction-where.input';

@InputType()
export class BTCIncomingTransactionUpsertWithoutSettlementTxnInput {
  @Field(() => BTCIncomingTransactionUpdateWithoutSettlementTxnInput, {
    nullable: false,
  })
  @Type(() => BTCIncomingTransactionUpdateWithoutSettlementTxnInput)
  update!: BTCIncomingTransactionUpdateWithoutSettlementTxnInput;

  @Field(() => BTCIncomingTransactionCreateWithoutSettlementTxnInput, {
    nullable: false,
  })
  @Type(() => BTCIncomingTransactionCreateWithoutSettlementTxnInput)
  create!: BTCIncomingTransactionCreateWithoutSettlementTxnInput;

  @Field(() => BTCIncomingTransactionWhereInput, { nullable: true })
  @Type(() => BTCIncomingTransactionWhereInput)
  where?: BTCIncomingTransactionWhereInput;
}
