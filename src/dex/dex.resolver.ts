import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DexService } from './dex.service';
import { TokenPriceResp, TokenTradeResp } from './dto/tokenprice.input';
import { CreateTradeDataInput } from './dto/create.trade.input';

@Resolver()
export class DexResolver {

  
  constructor(private readonly dexService: DexService) { }
  

  @Query(() => TokenPriceResp)
  getCryptoPrice() {
    return this.dexService.getPrices();
  }


  @Mutation(() => TokenTradeResp)
  createTradeData(
    @Args({ name: 'data', defaultValue: {} })
    data: CreateTradeDataInput,
  ) {
    return this.dexService.getTradeData(data);
  }

}
