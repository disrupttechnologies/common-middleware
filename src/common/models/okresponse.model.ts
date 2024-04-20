import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class OkResponse {
  @Field(() => String)
  message: string;
}
