import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInsightInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
