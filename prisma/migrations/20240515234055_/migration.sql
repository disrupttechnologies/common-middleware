/*
  Warnings:

  - A unique constraint covering the columns `[settlementTransactionId]` on the table `WhitelabelIncomingTransaction` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `senderAddress` to the `WhitelabelIncomingTransaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "WhitelabelIncomingTransaction" DROP CONSTRAINT "WhitelabelIncomingTransaction_provisionTxnHash_fkey";

-- AlterTable
ALTER TABLE "WhitelabelIncomingTransaction" ADD COLUMN     "senderAddress" TEXT NOT NULL,
ADD COLUMN     "settlementTransactionId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "WhitelabelIncomingTransaction_settlementTransactionId_key" ON "WhitelabelIncomingTransaction"("settlementTransactionId");

-- AddForeignKey
ALTER TABLE "WhitelabelIncomingTransaction" ADD CONSTRAINT "WhitelabelIncomingTransaction_settlementTransactionId_fkey" FOREIGN KEY ("settlementTransactionId") REFERENCES "BinanceIncomingTxn"("txnHash") ON DELETE SET NULL ON UPDATE CASCADE;
