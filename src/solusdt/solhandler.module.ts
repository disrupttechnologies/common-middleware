import { Module } from '@nestjs/common';
import { SOLIncomingTxnTrackerService } from './solincomingtxntracker.service';
import { SOLOrderManagerService } from './solordermanager';
import { SOLhandlerResolver  } from './solincoming.resolver';
import { SOLDataService } from './soldata.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [
    SOLhandlerResolver,
    SOLIncomingTxnTrackerService,
    SOLOrderManagerService,
    SOLDataService,
  ],
})
export class SolHandlerModule {}
