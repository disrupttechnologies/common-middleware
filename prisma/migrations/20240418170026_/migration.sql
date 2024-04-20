/*
  Warnings:

  - You are about to drop the column `feeCharged` on the `BTCSettlementTransaction` table. All the data in the column will be lost.
  - You are about to drop the column `qtyReceived` on the `BTCSettlementTransaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BTCSettlementTransaction" DROP COLUMN "feeCharged",
DROP COLUMN "qtyReceived",
ADD COLUMN     "amountReceivedInUSD" TEXT;
