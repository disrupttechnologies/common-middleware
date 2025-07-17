import { registerEnumType } from '@nestjs/graphql';

export enum WhitelabelIncomingTransactionScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId",
    whitelabelId = "whitelabelId",
    provisionTxnHash = "provisionTxnHash",
    settlementTransactionId = "settlementTransactionId"
}


registerEnumType(WhitelabelIncomingTransactionScalarFieldEnum, { name: 'WhitelabelIncomingTransactionScalarFieldEnum', description: undefined })
