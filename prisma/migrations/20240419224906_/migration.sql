/*
  Warnings:

  - Made the column `txnStatus` on table `BTCIncomingTransaction` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "BTCIncomingTransaction" ALTER COLUMN "txnStatus" SET NOT NULL;
