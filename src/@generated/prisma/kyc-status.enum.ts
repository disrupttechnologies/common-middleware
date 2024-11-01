import { registerEnumType } from '@nestjs/graphql';

export enum KycStatus {
    NOT_INITIALIZED = "NOT_INITIALIZED",
    PENDING = "PENDING",
    FAILED = "FAILED",
    RETRY = "RETRY",
    SUCCESS = "SUCCESS"
}


registerEnumType(KycStatus, { name: 'KycStatus', description: undefined })
