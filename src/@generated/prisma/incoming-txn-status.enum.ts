import { registerEnumType } from '@nestjs/graphql';

export enum IncomingTxnStatus {
  PAYMENT_RECEIVED = 'PAYMENT_RECEIVED',
  SETTLEMENT_INITIALZED = 'SETTLEMENT_INITIALZED',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

registerEnumType(IncomingTxnStatus, {
  name: 'IncomingTxnStatus',
  description: undefined,
});
