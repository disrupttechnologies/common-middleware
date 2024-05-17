import { GraphQLModule } from '@nestjs/graphql';
import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule, loggingMiddleware } from 'nestjs-prisma';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import config from './common/configs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GqlConfigService } from './gql-config.service';
import { ScheduleModule } from '@nestjs/schedule';
import { UserBtcAddressModule } from './user-btc-address/user-btc-address.module';
import { KycModule } from './kyc/kyc.module';
import { KycwebhookModule } from './kycwebhook/kycwebhook.module';
import { DocsModule } from './docs/docs.module';
import { FundsmanagerModule } from './fundsmanager/fundsmanager.module';
import { EventManagerModule } from './event-manager/event-manager.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { DexModule } from './dex/dex.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [
          // configure your prisma middleware
          loggingMiddleware({
            logger: new Logger('PrismaMiddleware'),
            logLevel: 'log',
          }),
        ],
      },
    }),

    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService,
    }),

    AuthModule,

    // BtchandlerModule,

    UserBtcAddressModule,

    DexModule,

    KycModule,

    KycwebhookModule,

    DocsModule,

    FundsmanagerModule,

    EventManagerModule,


 
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
