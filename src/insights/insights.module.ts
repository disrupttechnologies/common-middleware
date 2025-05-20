import { Module } from '@nestjs/common';
import { InsightsService } from './insights.service';
import { InsightsResolver } from './insights.resolver';

@Module({
  providers: [InsightsResolver, InsightsService],
})
export class InsightsModule {}
