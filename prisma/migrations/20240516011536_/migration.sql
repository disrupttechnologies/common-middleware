/*
  Warnings:

  - The values [BNB] on the enum `Network` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Network_new" AS ENUM ('BTC', 'SOL', 'BSC', 'ETH', 'TRC');
ALTER TYPE "Network" RENAME TO "Network_old";
ALTER TYPE "Network_new" RENAME TO "Network";
DROP TYPE "Network_old";
COMMIT;
