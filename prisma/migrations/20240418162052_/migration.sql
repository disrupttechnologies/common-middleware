/*
  Warnings:

  - You are about to drop the column `soldAtPrice` on the `BTCSettlementTransaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BTCSettlementTransaction" DROP COLUMN "soldAtPrice";
