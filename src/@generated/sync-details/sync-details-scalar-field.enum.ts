import { registerEnumType } from '@nestjs/graphql';

export enum SyncDetailsScalarFieldEnum {
    id = "id",
    lastSyncedAt = "lastSyncedAt",
    actionName = "actionName",
    metadata = "metadata"
}


registerEnumType(SyncDetailsScalarFieldEnum, { name: 'SyncDetailsScalarFieldEnum', description: undefined })
