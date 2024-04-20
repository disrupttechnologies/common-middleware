-- CreateEnum
CREATE TYPE "TxnStatus" AS ENUM ('PENDING', 'SUCCESS', 'ERROR');

-- AlterTable
ALTER TABLE "BTCIncomingTransaction" ADD COLUMN     "failedRemarks" TEXT,
ADD COLUMN     "txnStatus" "TxnStatus";
