-- CreateEnum
CREATE TYPE "BTCTxnProcessStatus" AS ENUM ('NOT_INITIALIZED', 'PENDING', 'SUCCESS', 'FAILED');

-- CreateTable
CREATE TABLE "SyncDetails" (
    "id" TEXT NOT NULL,
    "lastSyncedAt" TIMESTAMP(3) NOT NULL,
    "actionName" TEXT NOT NULL,
    "metadata" TEXT,

    CONSTRAINT "SyncDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BTCSettlementTransaction" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "feeCharged" TEXT,
    "incomingTxnId" TEXT NOT NULL,
    "orderId" TEXT,
    "orderplaceTime" TIMESTAMP(3),
    "soldAtPrice" TEXT,
    "qtyReceived" TEXT,
    "status" "BTCTxnProcessStatus" NOT NULL DEFAULT 'NOT_INITIALIZED',
    "failedRemarks" TEXT,

    CONSTRAINT "BTCSettlementTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BTCIncomingTransaction" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "txnHash" TEXT NOT NULL,
    "binanceTxnId" TEXT NOT NULL,
    "txnTime" TIMESTAMP(3) NOT NULL,
    "amount" INTEGER NOT NULL,
    "senderAddress" TEXT NOT NULL,

    CONSTRAINT "BTCIncomingTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SyncDetails_actionName_key" ON "SyncDetails"("actionName");

-- CreateIndex
CREATE UNIQUE INDEX "BTCSettlementTransaction_incomingTxnId_key" ON "BTCSettlementTransaction"("incomingTxnId");

-- CreateIndex
CREATE UNIQUE INDEX "BTCSettlementTransaction_orderId_key" ON "BTCSettlementTransaction"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "BTCIncomingTransaction_txnHash_key" ON "BTCIncomingTransaction"("txnHash");

-- CreateIndex
CREATE UNIQUE INDEX "BTCIncomingTransaction_binanceTxnId_key" ON "BTCIncomingTransaction"("binanceTxnId");

-- AddForeignKey
ALTER TABLE "BTCSettlementTransaction" ADD CONSTRAINT "BTCSettlementTransaction_incomingTxnId_fkey" FOREIGN KEY ("incomingTxnId") REFERENCES "BTCIncomingTransaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
