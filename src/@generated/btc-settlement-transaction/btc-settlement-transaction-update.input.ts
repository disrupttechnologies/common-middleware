import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BTCTxnProcessStatus } from '../prisma/btc-txn-process-status.enum';
import { BTCIncomingTransactionUpdateOneRequiredWithoutSettlementTxnNestedInput } from '../btc-incoming-transaction/btc-incoming-transaction-update-one-required-without-settlement-txn-nested.input';

@InputType()
export class BTCSettlementTransactionUpdateInput {
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
  amountReceivedInUSD?: string;

  @Field(() => BTCTxnProcessStatus, { nullable: true })
  status?: keyof typeof BTCTxnProcessStatus;

  @Field(() => String, { nullable: true })
  failedRemarks?: string;

  @Field(
    () =>
      BTCIncomingTransactionUpdateOneRequiredWithoutSettlementTxnNestedInput,
    { nullable: true },
  )
  incomingTxn?: BTCIncomingTransactionUpdateOneRequiredWithoutSettlementTxnNestedInput;
}
