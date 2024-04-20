import { CreateUserBtcAddressInput } from './create-user-btc-address.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserBtcAddressInput extends PartialType(CreateUserBtcAddressInput) {
  @Field(() => Int)
  id: number;
}
