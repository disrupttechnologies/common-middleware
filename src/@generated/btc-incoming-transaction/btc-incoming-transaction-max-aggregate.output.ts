import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TxnStatus } from '../prisma/txn-status.enum';

@ObjectType()
export class BTCIncomingTransactionMaxAggregate {
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

  @Field(() => String, { nullable: true })
  senderAddress?: string;

  @Field(() => TxnStatus, { nullable: true })
  txnStatus?: keyof typeof TxnStatus;

  @Field(() => String, { nullable: true })
  failedRemarks?: string;
}
