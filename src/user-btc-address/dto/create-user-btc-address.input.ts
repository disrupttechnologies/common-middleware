import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserBtcAddressInput {
  @Field(() => String, { description: 'BTC Address' })
  address: string;
  @Field(() => String, { description: 'User Id' })
  userId: string;
}

@InputType()
export class GetUserBTCAddressInput {
  @Field(() => String, { description: 'User Id' })
  userId: string;
}
