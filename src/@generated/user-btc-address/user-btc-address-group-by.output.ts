import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserBTCAddressCountAggregate } from './user-btc-address-count-aggregate.output';
import { UserBTCAddressMinAggregate } from './user-btc-address-min-aggregate.output';
import { UserBTCAddressMaxAggregate } from './user-btc-address-max-aggregate.output';

@ObjectType()
export class UserBTCAddressGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => String, { nullable: false })
  address!: string;

  @Field(() => String, { nullable: false })
  userId!: string;

  @Field(() => String, { nullable: false })
  whitelabelId!: string;

  @Field(() => UserBTCAddressCountAggregate, { nullable: true })
  _count?: UserBTCAddressCountAggregate;

  @Field(() => UserBTCAddressMinAggregate, { nullable: true })
  _min?: UserBTCAddressMinAggregate;

  @Field(() => UserBTCAddressMaxAggregate, { nullable: true })
  _max?: UserBTCAddressMaxAggregate;
}
