import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserBTCAddressCreateManyInput } from '../user-btc-address/user-btc-address-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserBtcAddressArgs {
  @Field(() => [UserBTCAddressCreateManyInput], { nullable: false })
  @Type(() => UserBTCAddressCreateManyInput)
  data!: Array<UserBTCAddressCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
