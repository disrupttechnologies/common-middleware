import { registerEnumType } from '@nestjs/graphql';

export enum SettlementTransactionScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    orderId = "orderId",
    orderplaceTime = "orderplaceTime",
    amountReceived = "amountReceived",
    status = "status"
}


registerEnumType(SettlementTransactionScalarFieldEnum, { name: 'SettlementTransactionScalarFieldEnum', description: undefined })
