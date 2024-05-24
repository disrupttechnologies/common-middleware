import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateKYCInput {
  @Field(() => String, { description: 'User Id' })
  userId: string;

  @Field(() => String, { description: 'User Metadata' })
  userMetadata: string;
}

@InputType()
export class CreateKYCsInput {
  @Field(() => [CreateKYCInput])
  data: CreateKYCInput[];
}
