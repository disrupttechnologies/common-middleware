import { Injectable } from '@nestjs/common';
import { Spot } from '@binance/connector-typescript';

import { ConfigService } from '@nestjs/config';
import { BinanceConfig } from 'src/common/configs/config.interface';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PriceReceiveEvent } from '../price.api.controller';

@Injectable()
export class BinanceCryptoPriceService {
  private cryptoPrices = {};

  private symbols: string;
  constructor(
    private readonly config: ConfigService,
    private readonly event: EventEmitter2,
  ) {
    const binance = config.get<BinanceConfig>('binance');
    let _symbols = '[';

    binance.SUPPORTED_COINS.forEach((item) => {
      _symbols += `"${item}USDT",`;
    });

    _symbols = _symbols.slice(0, -1) + ']';

    this.symbols = _symbols;
  }

  async updateCryptoPrice(client: Spot) {
    const resp = (await client.symbolPriceTicker({
      symbols: this.symbols,
    })) as [];

    if (resp) {
      const finalPrices = {};

      resp.map((item: any) => {
        finalPrices[item.symbol.replace('USDT', '')] = item.price;
      });
      this.cryptoPrices = finalPrices;
    }

    this.event.emit(
      'price.onPriceReceive',
      new PriceReceiveEvent(this.cryptoPrices),
    );
  }
}
