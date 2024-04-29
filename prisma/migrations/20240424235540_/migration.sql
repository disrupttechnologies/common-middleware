/*
  Warnings:

  - A unique constraint covering the columns `[kycApplicantId]` on the table `KYCDetail` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "KYCDetail" ADD COLUMN     "kycApplicantId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "KYCDetail_kycApplicantId_key" ON "KYCDetail"("kycApplicantId");
