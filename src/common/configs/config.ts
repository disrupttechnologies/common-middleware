import type { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 3000,
  },
 
  cors: {
    enabled: true,
  },
  binance: {
    API_KEY:  process.env.BINANCE_API_KEY,
    API_SECRET: process.env.BINANCE_API_SECRET,
    BASE_URL: process.env.BINANCE_BASE_URL
  },

  graphql: {
    playgroundEnabled: process.env.MODE==="DEV",
    debug: process.env.MODE==="DEV",
    schemaDestination: './src/schema.graphql',
    sortSchema: true,
  },
  security: {
    expiresIn: '1000d',
    refreshIn: '1000d',
    bcryptSaltOrRound: 10,
  },
};

export enum SYNC_ACTION_NAME {
  BTC_INCOMING = 'BTC_INCOMING',
  CEX = 'CEX',

}

export default (): Config => config;
