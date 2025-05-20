import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementTransactionProcessStatus } from '../prisma/settlement-transaction-process-status.enum';
import { BinanceIncomingTxnUncheckedUpdateOneWithoutSettlementTransactionNestedInput } from '../binance-incoming-txn/binance-incoming-txn-unchecked-update-one-without-settlement-transaction-nested.input';

@InputType()
export class SettlementTransactionUncheckedUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: true })
  orderId?: string;

  @Field(() => Date, { nullable: true })
  orderplaceTime?: Date | string;

  @Field(() => String, { nullable: true })
  amountReceived?: string;

  @Field(() => SettlementTransactionProcessStatus, { nullable: true })
  status?: keyof typeof SettlementTransactionProcessStatus;

  @Field(
    () =>
      BinanceIncomingTxnUncheckedUpdateOneWithoutSettlementTransactionNestedInput,
    { nullable: true },
  )
  incomingTxn?: BinanceIncomingTxnUncheckedUpdateOneWithoutSettlementTransactionNestedInput;
}
