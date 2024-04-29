export interface Config {
  nest: NestConfig;
  cors: CorsConfig;
  graphql: GraphqlConfig;
  security: SecurityConfig;
  binance: BinanceConfig;
  sumsub:SumSubConfig
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
