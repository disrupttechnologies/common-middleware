import { Module } from '@nestjs/common';
import { DexService } from './dex.service';
import { DexResolver } from './dex.resolver';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports:[HttpModule],
  providers: [DexResolver, DexService]
})
export class DexModule {}
