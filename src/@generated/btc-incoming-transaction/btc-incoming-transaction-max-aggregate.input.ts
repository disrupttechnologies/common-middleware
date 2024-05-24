import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BTCIncomingTransactionMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;

  @Field(() => Boolean, { nullable: true })
  txnHash?: true;

  @Field(() => Boolean, { nullable: true })
  binanceTxnId?: true;

  @Field(() => Boolean, { nullable: true })
  txnTime?: true;

  @Field(() => Boolean, { nullable: true })
  amount?: true;

  @Field(() => Boolean, { nullable: true })
  senderAddress?: true;

  @Field(() => Boolean, { nullable: true })
  txnStatus?: true;

  @Field(() => Boolean, { nullable: true })
  failedRemarks?: true;
}
