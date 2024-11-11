import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IncomingTxnStatus } from '../prisma/incoming-txn-status.enum';
import { SettlementTransactionCreateNestedOneWithoutIncomingTxnInput } from '../settlement-transaction/settlement-transaction-create-nested-one-without-incoming-txn.input';

@InputType()
export class BinanceIncomingTxnCreateWithoutWhitelabelIncomingTransactionInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: false })
  paidCurrency!: string;

  @Field(() => String, { nullable: false })
  amountInPaidCurrency!: string;

  @Field(() => String, { nullable: false })
  network!: string;

  @Field(() => String, { nullable: false })
  txnHash!: string;

  @Field(() => String, { nullable: false })
  senderAddress!: string;

  @Field(() => String, { nullable: false })
  binanceTxnId!: string;

  @Field(() => IncomingTxnStatus, { nullable: true })
  status?: keyof typeof IncomingTxnStatus;

  @Field(() => String, { nullable: true })
  failedRemarks?: string;

  @Field(() => SettlementTransactionCreateNestedOneWithoutIncomingTxnInput, {
    nullable: true,
  })
  settlementTransaction?: SettlementTransactionCreateNestedOneWithoutIncomingTxnInput;
}
