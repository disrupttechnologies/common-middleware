export interface Config {
  nest: NestConfig;
  cors: CorsConfig;
  graphql: GraphqlConfig;
  security: SecurityConfig;
  binance: BinanceConfig;
  sumsub: SumSubConfig
  s3Config: S3Config
  whitelabelConfig:WhitelabelConfig
}

export interface S3Config {
  accessKey: string;
  secret: string;
  region: string;
  // buckets: {
  //   [key : string]:string
  // }
}

export interface WhitelabelConfig {
  [key: string]: {
    s3Bucket: string,
    backendUri:string
  },
  
}

export interface NestConfig {
  port: number;
}

export interface SumSubConfig{
  apiURL: string,
  secret: string
  token: string
  levelName:string
}

export interface CorsConfig {
  enabled: boolean;
}

export interface BinanceConfig {
  API_KEY: string;
  API_SECRET: string;
  BASE_URL: string;
}

export interface GraphqlConfig {
  playgroundEnabled: boolean;
  debug: boolean;
  schemaDestination: string;
  sortSchema: boolean;
}

export interface SecurityConfig {
  expiresIn: string;
  refreshIn: string;
  bcryptSaltOrRound: string | number;
}
