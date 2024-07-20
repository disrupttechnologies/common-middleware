import type { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 3000,
  },
  s3Config: {
    secret: process.env.S3_SECRET,
    accessKey: process.env.S3_ACCESS_KEY,
    region: process.env.S3_REGION,
  },
  whitelabelConfig: {
    Agape4Me: {
      s3Bucket: 'agape-docs',
      backendUri: 'https://agape-server.fly.dev',
    },
    CryptoPrime: {
      s3Bucket: 'cryptoprime-docs',
      backendUri: 'https://cryptoprice-server.fly.dev',
    },
    PRVDT: {
      s3Bucket: 'cryptoprime-docs',
      backendUri: 'http://localhost:3001',
    },
    XSwipe: {
      s3Bucket: 'xswipe-docs',
      backendUri: 'https://xswipe-server.fly.dev',
    },
    THEONE: {
      s3Bucket: 'theone-docs',
      backendUri: 'https://theone-server.fly.dev',
    },
    BLP: {
      s3Bucket: 'boundlesspay-docs',
      backendUri: 'https://boundlesspay-server-dawn-fire-8179.fly.dev',
    },
  },

  sumsub: {
    apiURL: process.env.SUMSUB_BASE_URL,
    secret: process.env.SUMSUM_APP_SECRET,
    token: process.env.SUMSUB_APP_TOKEN,
    levelName: process.env.SUMSUB_LEVEL_NAME,
  },

  cors: {
    enabled: true,
  },
  binance: {
    API_KEY: process.env.BINANCE_API_KEY,
    API_SECRET: process.env.BINANCE_API_SECRET,
    BASE_URL: process.env.BINANCE_BASE_URL,
    SUPPORTED_COINS: [
      'BNB',
      'USDC',
      'LTC',
      'SOL',
      'DOT',
      'MATIC',
      'LINK',
      'ADA',
      'CAKE',
      'TWT',
      '1INCH',
      'DAI',
      'PEPE',
      'ETH',
      'BTC',
      'SHIB',
      'FTM',
      'NEAR',
      'MKR',
      'UNI',
    ],
  },

  graphql: {
    playgroundEnabled: process.env.MODE === 'DEV',
    debug: process.env.MODE === 'DEV',
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
  BINANCE_INCOMING = 'BINANCE_INCOMING',
  BINANCE_ORDER_MANAGER = 'BINANCE_ORDER_MANAGER',
  CEX = 'CEX',
}

export default (): Config => config;
