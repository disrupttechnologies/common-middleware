import { registerEnumType } from '@nestjs/graphql';

export enum BTCSettlementTransactionScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    incomingTxnId = "incomingTxnId",
    orderId = "orderId",
    orderplaceTime = "orderplaceTime",
    amountReceivedInUSD = "amountReceivedInUSD",
    status = "status",
    failedRemarks = "failedRemarks"
}


registerEnumType(BTCSettlementTransactionScalarFieldEnum, { name: 'BTCSettlementTransactionScalarFieldEnum', description: undefined })
