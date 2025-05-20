import { CreateInsightInput } from './create-insight.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInsightInput extends PartialType(CreateInsightInput) {
  @Field(() => Int)
  id: number;
}
