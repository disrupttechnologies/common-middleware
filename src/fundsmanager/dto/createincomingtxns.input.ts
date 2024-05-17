import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateIncomingTxnsInput {
  @Field(() => [IncomingTxnCreateInput], { nullable: false })
  data: [IncomingTxnCreateInput];
}

@InputType()
export class IncomingTxnCreateInput {
  @Field(() => String, { nullable: true })
  userId: string;

  @Field(() => String, { nullable: false })
  provisionTxnHash: string; 
}
