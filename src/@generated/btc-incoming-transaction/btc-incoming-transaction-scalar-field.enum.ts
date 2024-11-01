import { registerEnumType } from '@nestjs/graphql';

export enum BTCIncomingTransactionScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    txnHash = "txnHash",
    binanceTxnId = "binanceTxnId",
    txnTime = "txnTime",
    amount = "amount",
    senderAddress = "senderAddress",
    txnStatus = "txnStatus",
    failedRemarks = "failedRemarks"
}


registerEnumType(BTCIncomingTransactionScalarFieldEnum, { name: 'BTCIncomingTransactionScalarFieldEnum', description: undefined })
