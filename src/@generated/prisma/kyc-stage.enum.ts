import { registerEnumType } from '@nestjs/graphql';

export enum KYCStage {
    NOT_INITIALIZED = "NOT_INITIALIZED",
    ID_CREATED = "ID_CREATED",
    DOCS_UPLOADED = "DOCS_UPLOADED"
}


registerEnumType(KYCStage, { name: 'KYCStage', description: undefined })
