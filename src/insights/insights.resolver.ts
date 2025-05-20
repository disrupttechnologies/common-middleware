import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InsightsService } from './insights.service';
import { Insight } from './entities/insight.entity';
import { CreateInsightInput } from './dto/create-insight.input';
import { UpdateInsightInput } from './dto/update-insight.input';
import { TVLEntity } from './entities/tvl.entity';

@Resolver(() => Insight)
export class InsightsResolver {
  constructor(private readonly insightsService: InsightsService) {}

  @Query(() => [TVLEntity])
  getTVL() {
    return this.insightsService.getTVL();
  }
}
