/*
  Warnings:

  - You are about to drop the column `userMetedata` on the `KYCDetail` table. All the data in the column will be lost.
  - Added the required column `userMetadata` to the `KYCDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "KYCDetail" DROP COLUMN "userMetedata",
ADD COLUMN     "userMetadata" TEXT NOT NULL;
