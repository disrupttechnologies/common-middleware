import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IncomingTxnStatus } from '../prisma/incoming-txn-status.enum';
import { SettlementTransactionUpdateOneWithoutIncomingTxnNestedInput } from '../settlement-transaction/settlement-transaction-update-one-without-incoming-txn-nested.input';
import { WhitelabelIncomingTransactionUpdateOneWithoutSettlementTransactionNestedInput } from '../whitelabel-incoming-transaction/whitelabel-incoming-transaction-update-one-without-settlement-transaction-nested.input';

@InputType()
export class BinanceIncomingTxnUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: true })
  paidCurrency?: string;

  @Field(() => String, { nullable: true })
  amountInPaidCurrency?: string;

  @Field(() => String, { nullable: true })
  network?: string;

  @Field(() => String, { nullable: true })
  txnHash?: string;

  @Field(() => String, { nullable: true })
  senderAddress?: string;

  @Field(() => String, { nullable: true })
  binanceTxnId?: string;

  @Field(() => IncomingTxnStatus, { nullable: true })
  status?: keyof typeof IncomingTxnStatus;

  @Field(() => String, { nullable: true })
  failedRemarks?: string;

  @Field(() => SettlementTransactionUpdateOneWithoutIncomingTxnNestedInput, {
    nullable: true,
  })
  settlementTransaction?: SettlementTransactionUpdateOneWithoutIncomingTxnNestedInput;

  @Field(
    () =>
      WhitelabelIncomingTransactionUpdateOneWithoutSettlementTransactionNestedInput,
    { nullable: true },
  )
  whitelabelIncomingTransaction?: WhitelabelIncomingTransactionUpdateOneWithoutSettlementTransactionNestedInput;
}
