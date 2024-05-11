import { BadRequestException, Injectable } from '@nestjs/common';
import { TokenBalanceResponse, stableToken, tokensConfig } from './config/tokens';
import { TokenPriceResp, TokenTradeResp } from './dto/tokenprice.input';
import { Cron } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';
import { CreateTradeDataInput } from './dto/create.trade.input';
import axios,{AxiosError} from "axios"
@Injectable()
export class DexService {
  private oneInchApiKey: string;
  private data: TokenBalanceResponse = {};
  constructor(private readonly httpService: HttpService) {
    this.oneInchApiKey = process.env.ONE_INCH_API_KEY;
    this.init();
  }

  init() {
    for (const chainId of Object.keys(tokensConfig)) {
      this.data[chainId] = {};
      for (const tokens of tokensConfig[chainId]) {
        this.data[chainId][tokens] = '-1';
      }
    }
    this.fetchPrice();
  }

  @Cron('*/2 * * * *')
  async fetchPrice() {
    for (const chainId of Object.keys(this.data)) {
      const data = await this.fetchPriceFrom1Inch(
        chainId,
        Object.keys(this.data[chainId]),
      );
      if (data) {
        this.data[chainId] = data;
      }
      await new Promise((r) => setTimeout(r, 2000)); // avoid ratelimiting
    }
  }

  async fetchPriceFrom1Inch(chainId: string, tokens: string[]) {
    const url = `https://api.1inch.dev/price/v1.1/${chainId}/${tokens.toString()}`;

    const config = {
      headers: {
        Authorization: `Bearer ${this.oneInchApiKey}`,
      },
      params: {
        currency: 'USD',
      },
    };

    try {
      const data = await this.httpService.axiosRef.get(url, config);
      return data.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error('error fetchPriceFrom1Inch', err.response.data.description);
      } else {
        console.error('error fetchPriceFrom1Inch', err.message);
      }
    }
  }

  getPrices(): TokenPriceResp {
    return { prices: JSON.stringify(this.data) };
  }

  async getTradeData(data: CreateTradeDataInput) :Promise<TokenTradeResp>{
    const url = `https://api.1inch.dev/swap/v6.0/${data.chainId}/swap`;

    const config = {
      headers: {
        Authorization: `Bearer ${this.oneInchApiKey}`,
      },
      params: {
        src: data.src,
        dst: stableToken[data.chainId],
        amount: data.amount,
        from: data.from,
        receiver: data.receiver,
        slippage: '0.5',
      },
    };

    try {
      const data = await this.httpService.axiosRef.get(url, config);
      return {
        data:JSON.stringify(data.data)
      }
      
    } catch (err: any | AxiosError) {
      if (axios.isAxiosError(err)) {
        throw new BadRequestException(err.response.data.description)
      }
      throw new BadRequestException(err.message)
    }
  }
}
