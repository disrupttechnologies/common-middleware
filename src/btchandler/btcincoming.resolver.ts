import { Args, Query, Resolver } from '@nestjs/graphql';
import { BTCIncomingTxnTrackerService } from './btcincomingtxntracker.service';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from 'nestjs-prisma';
import { SYNC_ACTION_NAME } from 'src/common/configs/config';
import { BTCOrderManagerService } from './btcordermanager';
import { Spot as BinanceClient } from '@binance/connector-typescript';
import { ConfigService } from '@nestjs/config';
import { BinanceConfig } from 'src/common/configs/config.interface';
import { BTCIncomingTransaction } from 'src/@generated/btc-incoming-transaction/btc-incoming-transaction.model';
import { BTCDataService } from './btcdata.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { BTCIncomingTransactionWhereInput } from 'src/@generated/btc-incoming-transaction/btc-incoming-transaction-where.input';
import { UserEntity } from 'src/common/decorators/user.decorator';

@UseGuards(GqlAuthGuard)
@Resolver('BtcHandler')
export class BtchandlerResolver {
  private isInitialized: boolean;
  private binanceClient: BinanceClient;

  private syncDetails = {
    [SYNC_ACTION_NAME.BTC_INCOMING]: 0,
    [SYNC_ACTION_NAME.CEX]: 0,
  };

  constructor(
    private readonly btcIncomingTxnTrackerService: BTCIncomingTxnTrackerService,
    private readonly btcOrderManagerService: BTCOrderManagerService,
    private readonly config: ConfigService,
    private readonly prisma: PrismaService,
    private readonly dataService: BTCDataService,
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
    let incomingSyncRec = await this.prisma.syncDetails.findFirst({
      where: {
        actionName: SYNC_ACTION_NAME.BTC_INCOMING,
      },
    });
    if (!incomingSyncRec) {
      incomingSyncRec = await this.prisma.syncDetails.create({
        data: {
          lastSyncedAt: new Date(),
          actionName: SYNC_ACTION_NAME.BTC_INCOMING,
        },
      });
    }

    let cexSyncRec = await this.prisma.syncDetails.findFirst({
      where: {
        actionName: SYNC_ACTION_NAME.CEX,
      },
    });
    if (!cexSyncRec) {
      cexSyncRec = await this.prisma.syncDetails.create({
        data: {
          lastSyncedAt: new Date(),
          actionName: SYNC_ACTION_NAME.CEX,
        },
      });
    }

    this.syncDetails[SYNC_ACTION_NAME.CEX] = cexSyncRec.lastSyncedAt.getTime();
    this.syncDetails[SYNC_ACTION_NAME.BTC_INCOMING] =
      incomingSyncRec.lastSyncedAt.getTime();

    this.isInitialized = true;

    await this.listenForNewTxns();
    await this.settleOrders();
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
        await this.btcIncomingTxnTrackerService.handle(
          this.syncDetails[SYNC_ACTION_NAME.BTC_INCOMING],
          this.binanceClient,
        );
        await this.markSynced(SYNC_ACTION_NAME.BTC_INCOMING);
      } catch (err) {
        console.error('listenForNewTxns', err);
      }
    }
  }

  @Cron('*/2 * * * *')
  async settleOrders() {
    if (this.isInitialized) {
      try {
        await this.btcOrderManagerService.handle(
          this.syncDetails[SYNC_ACTION_NAME.CEX],
          this.binanceClient,
        );
        await this.markSynced(SYNC_ACTION_NAME.CEX);
      } catch (err) {
        console.error('binanceIncoming', err);
      }
    }
  }

  @Query(() => [BTCIncomingTransaction])
  async getBTCTxns(
    @UserEntity() user,
    @Args({ name: 'where', defaultValue: {} })
    where: BTCIncomingTransactionWhereInput,
  ) {
    return this.dataService.getTransactionsByAddresses(
      user.whitelabelId,
      where,
    );
  }
}
