-- DropForeignKey
ALTER TABLE "WhitelabelIncomingTransaction" DROP CONSTRAINT "WhitelabelIncomingTransaction_settlementTransactionId_fkey";

-- AddForeignKey
ALTER TABLE "WhitelabelIncomingTransaction" ADD CONSTRAINT "WhitelabelIncomingTransaction_settlementTransactionId_fkey" FOREIGN KEY ("settlementTransactionId") REFERENCES "BinanceIncomingTxn"("id") ON DELETE SET NULL ON UPDATE CASCADE;
