import { Module } from '@nestjs/common';
import { FundsmanagerService } from './fundsmanager.service';
import { FundsmanagerResolver } from './fundsmanager.resolver';
import { FundManagerTxnWatchman } from './fundsmanager.txn.watchman';
import { BinanceIncomingTxnTrackerService } from './subservices/binanceIncomingTxnTrackerService';
import { BinanceOrderManagerService } from './subservices/binanceOrderManagerService';
import { BinanceCryptoPriceService } from './subservices/binanceCryptoPriceService';
import { PriceApiController } from './price.api.controller';

@Module({
  providers: [FundsmanagerResolver, FundsmanagerService,
    FundManagerTxnWatchman,
    BinanceIncomingTxnTrackerService,
    BinanceOrderManagerService,
    BinanceCryptoPriceService,
    
  ],
  controllers: [PriceApiController],

})
export class FundsmanagerModule {}
