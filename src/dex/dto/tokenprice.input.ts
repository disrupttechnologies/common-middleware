import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TokenPriceResp {
  @Field(() => String, { nullable: false })
  prices!: string;
}

@ObjectType()
export class TokenTradeResp {
  @Field(() => String, { nullable: false })
  data!: string;
}
