import { Module } from '@nestjs/common';
import { BTCIncomingTxnTrackerService } from './btcincomingtxntracker.service';
import { BTCOrderManagerService } from './btcordermanager';
import { BtchandlerResolver } from './btcincoming.resolver';
import { BTCDataService } from './btcdata.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [
    BtchandlerResolver,
    BTCIncomingTxnTrackerService,
    BTCOrderManagerService,
    BTCDataService,
  ],
})
export class BtchandlerModule {}
