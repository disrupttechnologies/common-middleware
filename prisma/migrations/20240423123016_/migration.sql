-- CreateEnum
CREATE TYPE "KycStatus" AS ENUM ('NOT_INITIALIZED', 'PENDING', 'FAILED', 'RETRY', 'SUCCESS');

-- CreateTable
CREATE TABLE "KYCDetail" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "kycStatus" "KycStatus" NOT NULL DEFAULT 'NOT_INITIALIZED',
    "failedRemarks" TEXT,
    "docsMetadata" TEXT NOT NULL,
    "userMetedata" TEXT NOT NULL,
    "whitelabelId" TEXT NOT NULL,

    CONSTRAINT "KYCDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "KYCDetail_userId_key" ON "KYCDetail"("userId");
