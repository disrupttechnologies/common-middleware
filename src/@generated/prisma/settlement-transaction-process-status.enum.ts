import { registerEnumType } from '@nestjs/graphql';

export enum SettlementTransactionProcessStatus {
    NOT_INITIALIZED = "NOT_INITIALIZED",
    PENDING = "PENDING",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED"
}


registerEnumType(SettlementTransactionProcessStatus, { name: 'SettlementTransactionProcessStatus', description: undefined })
