import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateTradeDataInput {
  @Field(() => String)
  src: string;

  @Field(() => String)
  amount: string;

  @Field(() => String)
  from: string;

  @Field(() => String)
  receiver: string;

  @Field(() => String)
  chainId: string;
}
