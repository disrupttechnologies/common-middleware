import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { BTCTxnProcessStatus } from '../prisma/btc-txn-process-status.enum';
import { BTCIncomingTransaction } from '../btc-incoming-transaction/btc-incoming-transaction.model';

@ObjectType()
export class BTCSettlementTransaction {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => String, { nullable: false })
  incomingTxnId!: string;

  @Field(() => String, { nullable: true })
  orderId!: string | null;

  @Field(() => Date, { nullable: true })
  orderplaceTime!: Date | null;

  @Field(() => String, { nullable: true })
  amountReceivedInUSD!: string | null;

  @Field(() => BTCTxnProcessStatus, {
    nullable: false,
    defaultValue: 'NOT_INITIALIZED',
  })
  status!: keyof typeof BTCTxnProcessStatus;

  @Field(() => String, { nullable: true })
  failedRemarks!: string | null;

  @Field(() => BTCIncomingTransaction, { nullable: false })
  incomingTxn?: BTCIncomingTransaction;
}
