import { Module } from '@nestjs/common';
import { KycwebhookService } from './kycwebhook.service';
import { KycwebhookController } from './kycwebhook.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],

  controllers: [KycwebhookController],
  providers: [KycwebhookService],
})
export class KycwebhookModule {}
