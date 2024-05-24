import { Module } from '@nestjs/common';
import { DocsController } from './docs.controller';
import { SumSubService } from 'src/kyc/sumsub.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [DocsController],
  providers: [SumSubService],
})
export class DocsModule {}
