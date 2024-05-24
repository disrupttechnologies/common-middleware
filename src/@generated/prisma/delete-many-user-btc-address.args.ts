import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserBTCAddressWhereInput } from '../user-btc-address/user-btc-address-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserBtcAddressArgs {
  @Field(() => UserBTCAddressWhereInput, { nullable: true })
  @Type(() => UserBTCAddressWhereInput)
  where?: UserBTCAddressWhereInput;
}
