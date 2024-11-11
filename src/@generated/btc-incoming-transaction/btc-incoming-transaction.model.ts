import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { TxnStatus } from '../prisma/txn-status.enum';
import { BTCSettlementTransaction } from '../btc-settlement-transaction/btc-settlement-transaction.model';
import { UserBTCAddress } from '../user-btc-address/user-btc-address.model';

@ObjectType()
export class BTCIncomingTransaction {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => String, { nullable: false })
  txnHash!: string;

  @Field(() => String, { nullable: false })
  binanceTxnId!: string;

  @Field(() => Date, { nullable: false })
  txnTime!: Date;

  @Field(() => String, { nullable: false })
  amount!: string;

  @Field(() => String, { nullable: false })
  senderAddress!: string;

  @Field(() => TxnStatus, { nullable: false })
  txnStatus!: keyof typeof TxnStatus;

  @Field(() => String, { nullable: true })
  failedRemarks!: string | null;

  @Field(() => BTCSettlementTransaction, { nullable: true })
  settlementTxn?: BTCSettlementTransaction | null;

  @Field(() => UserBTCAddress, { nullable: false })
  user?: UserBTCAddress;
}
