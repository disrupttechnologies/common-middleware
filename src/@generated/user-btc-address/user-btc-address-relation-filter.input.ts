import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserBTCAddressWhereInput } from './user-btc-address-where.input';

@InputType()
export class UserBTCAddressRelationFilter {
  @Field(() => UserBTCAddressWhereInput, { nullable: true })
  is?: UserBTCAddressWhereInput;

  @Field(() => UserBTCAddressWhereInput, { nullable: true })
  isNot?: UserBTCAddressWhereInput;
}
