import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserBTCAddressWhereUniqueInput } from '../user-btc-address/user-btc-address-where-unique.input';
import { Type } from 'class-transformer';
import { UserBTCAddressCreateInput } from '../user-btc-address/user-btc-address-create.input';
import { UserBTCAddressUpdateInput } from '../user-btc-address/user-btc-address-update.input';

@ArgsType()
export class UpsertOneUserBtcAddressArgs {
  @Field(() => UserBTCAddressWhereUniqueInput, { nullable: false })
  @Type(() => UserBTCAddressWhereUniqueInput)
  where!: UserBTCAddressWhereUniqueInput;

  @Field(() => UserBTCAddressCreateInput, { nullable: false })
  @Type(() => UserBTCAddressCreateInput)
  create!: UserBTCAddressCreateInput;

  @Field(() => UserBTCAddressUpdateInput, { nullable: false })
  @Type(() => UserBTCAddressUpdateInput)
  update!: UserBTCAddressUpdateInput;
}
