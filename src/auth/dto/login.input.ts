import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginInput {
  @Field({ nullable: false })
  key: string;

  @Field({ nullable: false })
  whitelabelId: string;
}
