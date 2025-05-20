import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TVLEntity {
  @Field(() => String)
  month_year: string;

  @Field(() => String)
  total_amount_received: string;
}
