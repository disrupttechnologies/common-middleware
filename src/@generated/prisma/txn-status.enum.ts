import { registerEnumType } from '@nestjs/graphql';

export enum TxnStatus {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

registerEnumType(TxnStatus, { name: 'TxnStatus', description: undefined });
