import { registerEnumType } from '@nestjs/graphql';

export enum BinanceIncomingTxnScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    paidCurrency = "paidCurrency",
    amountInPaidCurrency = "amountInPaidCurrency",
    network = "network",
    txnHash = "txnHash",
    senderAddress = "senderAddress",
    binanceTxnId = "binanceTxnId",
    status = "status",
    settlementTransactionId = "settlementTransactionId",
    failedRemarks = "failedRemarks"
}


registerEnumType(BinanceIncomingTxnScalarFieldEnum, { name: 'BinanceIncomingTxnScalarFieldEnum', description: undefined })
