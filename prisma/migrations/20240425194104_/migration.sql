-- CreateEnum
CREATE TYPE "KYCStage" AS ENUM ('NOT_INITIALIZED', 'ID_CREATED', 'DOCS_UPLOADED');

-- AlterTable
ALTER TABLE "KYCDetail" ADD COLUMN     "kycStage" "KYCStage" NOT NULL DEFAULT 'NOT_INITIALIZED';
