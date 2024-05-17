/*
  Warnings:

  - You are about to drop the column `senderAddress` on the `WhitelabelIncomingTransaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "WhitelabelIncomingTransaction" DROP COLUMN "senderAddress";
