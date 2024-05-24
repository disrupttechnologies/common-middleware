import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserBtcAddressService } from './user-btc-address.service';
import {
  CreateUserBtcAddressInput,
  GetUserBTCAddressInput,
} from './dto/create-user-btc-address.input';
import { UserEntity } from 'src/common/decorators/user.decorator';
import { OkResponse } from 'src/common/models/okresponse.model';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { UserBTCAddress } from 'src/@generated/user-btc-address/user-btc-address.model';

@UseGuards(GqlAuthGuard)
@Resolver(() => UserBTCAddress)
export class UserBtcAddressResolver {
  constructor(private readonly userBtcAddressService: UserBtcAddressService) {}

  @Mutation(() => OkResponse)
  createUserBtcAddress(
    @Args('data') createUserBtcAddressInput: CreateUserBtcAddressInput,
    @UserEntity() user: any,
  ) {
    return this.userBtcAddressService.create(
      user.whitelabelId,
      createUserBtcAddressInput,
    );
  }

  @Query(() => [UserBTCAddress])
  getUserAddresses(
    @UserEntity() user: any,
    @Args('data') where: GetUserBTCAddressInput,
  ) {
    return this.userBtcAddressService.getUserAddresses(
      where.userId,
      user.whitelabelId,
    );
  }
}
