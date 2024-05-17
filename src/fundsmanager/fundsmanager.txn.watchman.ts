import { Injectable } from '@nestjs/common';

import { PrismaService } from 'nestjs-prisma';
import { Spot as BinanceClient } from '@binance/connector-typescript';
import { SYNC_ACTION_NAME } from 'src/common/configs/config';
import { BinanceIncomingTxnTrackerService } from './subservices/binanceIncomingTxnTrackerService';
import { ConfigService } from '@nestjs/config';
import { BinanceConfig } from 'src/common/configs/config.interface';
import { Cron } from '@nestjs/schedule';
import { BinanceOrderManagerService } from './subservices/binanceOrderManagerService';
import { BinanceCryptoPriceService } from './subservices/binanceCryptoPriceService';

@Injectable()
export class FundManagerTxnWatchman {
  private isInitialized: boolean;
  private binanceClient: BinanceClient;

  private syncDetails = {
    [SYNC_ACTION_NAME.BINANCE_INCOMING]: 0,
    [SYNC_ACTION_NAME.BINANCE_ORDER_MANAGER]: 0,
  };

  constructor(
    private readonly binanceIncomingTxnTrackerService: BinanceIncomingTxnTrackerService,
    private readonly binanceOrderManagerService: BinanceOrderManagerService,
    private readonly binancePricingService: BinanceCryptoPriceService,
    private readonly config: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    const binanceConfig = config.get<BinanceConfig>('binance');
    this.binanceClient = new BinanceClient(
      binanceConfig.API_KEY,
      binanceConfig.API_SECRET,
      { baseURL: binanceConfig.BASE_URL },
    );


    this.init();
  }

  async init() {


    await this.binanceClient.depositAddress("BTC", {
      network:"BSC"
    });
    let incomingSyncRec = await this.prisma.syncDetails.findFirst({
      where: {
        actionName: SYNC_ACTION_NAME.BINANCE_INCOMING,
      },
    });
    if (!incomingSyncRec) {
      incomingSyncRec = await this.prisma.syncDetails.create({
        data: {
          lastSyncedAt: new Date(),
          actionName: SYNC_ACTION_NAME.BINANCE_INCOMING,
        },
      });
    }

    let orderManagerSyncRec = await this.prisma.syncDetails.findFirst({
      where: {
        actionName: SYNC_ACTION_NAME.BINANCE_ORDER_MANAGER,
      },
    });
    if (!orderManagerSyncRec) {
      orderManagerSyncRec = await this.prisma.syncDetails.create({
        data: {
          lastSyncedAt: new Date(),
          actionName: SYNC_ACTION_NAME.BINANCE_ORDER_MANAGER,
        },
      });
    }

    this.syncDetails[SYNC_ACTION_NAME.BINANCE_ORDER_MANAGER] =
    orderManagerSyncRec.lastSyncedAt.getTime();
    this.syncDetails[SYNC_ACTION_NAME.BINANCE_INCOMING] =
      incomingSyncRec.lastSyncedAt.getTime();

    this.isInitialized = true;

    await this.listenForNewTxns()
    await this.settleOrders()
    await this.updateCryptoPrice()
  }

  async markSynced(action: SYNC_ACTION_NAME) {
    const rec = await this.prisma.syncDetails.update({
      where: {
        actionName: action,
      },
      data: {
        lastSyncedAt: new Date(),
      },
    });
    this.syncDetails[action] = rec.lastSyncedAt.getTime();
  }

  @Cron('*/2 * * * *')
  async listenForNewTxns() {
    if (this.isInitialized) {
      try {
        await this.binanceIncomingTxnTrackerService.handle(
          this.syncDetails[SYNC_ACTION_NAME.BINANCE_INCOMING],
          this.binanceClient,
        );
        await this.markSynced(SYNC_ACTION_NAME.BINANCE_INCOMING);
      } catch (err) {
        console.error('listenForNewTxns', err);
      }
    }
  }

  @Cron('*/3 * * * *')
  async settleOrders() {
    if (this.isInitialized) {
      try {
        await this.binanceOrderManagerService.handle(
          this.syncDetails[SYNC_ACTION_NAME.BINANCE_ORDER_MANAGER],
          this.binanceClient,
        );
        await this.markSynced(SYNC_ACTION_NAME.BINANCE_ORDER_MANAGER);
      } catch (err) {
        console.error('binanceIncoming', err);
      }
    }
  }


  
  @Cron('*/1 * * * *')
  async updateCryptoPrice() {
    try {
      await this.binancePricingService.updateCryptoPrice(
        this.binanceClient,
      );
    } catch (err) {
      console.error('updateCryptoPrice', err);
    }
  }


  
    
}
