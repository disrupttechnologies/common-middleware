import { registerEnumType } from '@nestjs/graphql';

export enum BTCTxnProcessStatus {
    NOT_INITIALIZED = "NOT_INITIALIZED",
    PENDING = "PENDING",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED"
}


registerEnumType(BTCTxnProcessStatus, { name: 'BTCTxnProcessStatus', description: undefined })
