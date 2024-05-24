import { Controller, Get } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

export class PriceReceiveEvent {
  constructor(public data: any) {}
}
@Controller('cryptoprice')
export class PriceApiController {
  private data: any = {};

  @Get()
  async getPricePrice() {
    return this.data;
  }

  @OnEvent('price.onPriceReceive')
  onPriceReceive(payload: PriceReceiveEvent) {
    this.data = payload.data;
  }
}
