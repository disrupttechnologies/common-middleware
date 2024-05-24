import { Module } from '@nestjs/common';
import { KycService } from './kyc.service';
import { KycResolver } from './kyc.resolver';
import { SumSubService } from './sumsub.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [KycResolver, KycService, SumSubService],
})
export class KycModule {}
