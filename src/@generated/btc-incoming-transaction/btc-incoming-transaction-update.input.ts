import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TxnStatus } from '../prisma/txn-status.enum';
import { BTCSettlementTransactionUpdateOneWithoutIncomingTxnNestedInput } from '../btc-settlement-transaction/btc-settlement-transaction-update-one-without-incoming-txn-nested.input';
import { UserBTCAddressUpdateOneRequiredWithoutTxnsNestedInput } from '../user-btc-address/user-btc-address-update-one-required-without-txns-nested.input';

@InputType()
export class BTCIncomingTransactionUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: true })
  txnHash?: string;

  @Field(() => String, { nullable: true })
  binanceTxnId?: string;

  @Field(() => Date, { nullable: true })
  txnTime?: Date | string;

  @Field(() => String, { nullable: true })
  amount?: string;

  @Field(() => TxnStatus, { nullable: true })
  txnStatus?: keyof typeof TxnStatus;

  @Field(() => String, { nullable: true })
  failedRemarks?: string;

  @Field(() => BTCSettlementTransactionUpdateOneWithoutIncomingTxnNestedInput, {
    nullable: true,
  })
  settlementTxn?: BTCSettlementTransactionUpdateOneWithoutIncomingTxnNestedInput;

  @Field(() => UserBTCAddressUpdateOneRequiredWithoutTxnsNestedInput, {
    nullable: true,
  })
  user?: UserBTCAddressUpdateOneRequiredWithoutTxnsNestedInput;
}
