-- CreateEnum
CREATE TYPE "SettlementTransactionProcessStatus" AS ENUM ('NOT_INITIALIZED', 'PENDING', 'SUCCESS', 'FAILED');

-- CreateEnum
CREATE TYPE "IncomingTxnStatus" AS ENUM ('PAYMENT_RECEIVED', 'SETTLEMENT_INITIALZED', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "SolIncomingTxnStatus" AS ENUM ('NOT_INITIALIZED', 'RECEIVED', 'CONVERSION_PROCESSING', 'FAILED', 'SUCCESS');

-- CreateEnum
CREATE TYPE "Network" AS ENUM ('BTC', 'SOL', 'BNB', 'ETH', 'TRC');

-- CreateTable
CREATE TABLE "WhitelabelIncomingTransaction" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "whitelabelId" TEXT NOT NULL,
    "provisionTxnHash" TEXT NOT NULL,

    CONSTRAINT "WhitelabelIncomingTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BinanceIncomingTxn" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "paidCurrency" TEXT NOT NULL,
    "amountInPaidCurrency" TEXT NOT NULL,
    "network" TEXT NOT NULL,
    "txnHash" TEXT NOT NULL,
    "senderAddress" TEXT NOT NULL,
    "binanceTxnId" TEXT NOT NULL,
    "status" "IncomingTxnStatus" DEFAULT 'PAYMENT_RECEIVED',
    "settlementTransactionId" TEXT,
    "failedRemarks" TEXT,

    CONSTRAINT "BinanceIncomingTxn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SettlementTransaction" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "orderId" TEXT,
    "orderplaceTime" TIMESTAMP(3),
    "amountReceived" TEXT,
    "status" "SettlementTransactionProcessStatus" NOT NULL DEFAULT 'NOT_INITIALIZED',

    CONSTRAINT "SettlementTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WhitelabelIncomingTransaction_provisionTxnHash_key" ON "WhitelabelIncomingTransaction"("provisionTxnHash");

-- CreateIndex
CREATE UNIQUE INDEX "BinanceIncomingTxn_txnHash_key" ON "BinanceIncomingTxn"("txnHash");

-- CreateIndex
CREATE UNIQUE INDEX "BinanceIncomingTxn_binanceTxnId_key" ON "BinanceIncomingTxn"("binanceTxnId");

-- CreateIndex
CREATE UNIQUE INDEX "BinanceIncomingTxn_settlementTransactionId_key" ON "BinanceIncomingTxn"("settlementTransactionId");

-- CreateIndex
CREATE UNIQUE INDEX "SettlementTransaction_orderId_key" ON "SettlementTransaction"("orderId");

-- AddForeignKey
ALTER TABLE "WhitelabelIncomingTransaction" ADD CONSTRAINT "WhitelabelIncomingTransaction_provisionTxnHash_fkey" FOREIGN KEY ("provisionTxnHash") REFERENCES "BinanceIncomingTxn"("txnHash") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BinanceIncomingTxn" ADD CONSTRAINT "BinanceIncomingTxn_settlementTransactionId_fkey" FOREIGN KEY ("settlementTransactionId") REFERENCES "SettlementTransaction"("id") ON DELETE SET NULL ON UPDATE CASCADE;
