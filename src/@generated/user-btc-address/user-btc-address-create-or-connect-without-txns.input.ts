import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserBTCAddressWhereUniqueInput } from './user-btc-address-where-unique.input';
import { Type } from 'class-transformer';
import { UserBTCAddressCreateWithoutTxnsInput } from './user-btc-address-create-without-txns.input';

@InputType()
export class UserBTCAddressCreateOrConnectWithoutTxnsInput {
  @Field(() => UserBTCAddressWhereUniqueInput, { nullable: false })
  @Type(() => UserBTCAddressWhereUniqueInput)
  where!: Prisma.AtLeast<UserBTCAddressWhereUniqueInput, 'id' | 'address'>;

  @Field(() => UserBTCAddressCreateWithoutTxnsInput, { nullable: false })
  @Type(() => UserBTCAddressCreateWithoutTxnsInput)
  create!: UserBTCAddressCreateWithoutTxnsInput;
}
