/*
  Warnings:

  - The values [DOCS_UPLOADED] on the enum `KYCStage` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "KYCStage_new" AS ENUM ('NOT_INITIALIZED', 'ID_CREATED', 'PASSPORT_UPLOADED', 'SELFIE_UPLOADED');
ALTER TABLE "KYCDetail" ALTER COLUMN "kycStage" DROP DEFAULT;
ALTER TABLE "KYCDetail" ALTER COLUMN "kycStage" TYPE "KYCStage_new" USING ("kycStage"::text::"KYCStage_new");
ALTER TYPE "KYCStage" RENAME TO "KYCStage_old";
ALTER TYPE "KYCStage_new" RENAME TO "KYCStage";
DROP TYPE "KYCStage_old";
ALTER TABLE "KYCDetail" ALTER COLUMN "kycStage" SET DEFAULT 'NOT_INITIALIZED';
COMMIT;
