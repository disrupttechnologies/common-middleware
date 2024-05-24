import { Module } from '@nestjs/common';
import { UserBtcAddressService } from './user-btc-address.service';
import { UserBtcAddressResolver } from './user-btc-address.resolver';

@Module({
  providers: [UserBtcAddressResolver, UserBtcAddressService],
})
export class UserBtcAddressModule {}
