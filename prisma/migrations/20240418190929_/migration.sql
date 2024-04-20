-- CreateTable
CREATE TABLE "UserBTCAddress" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "whitelabelId" TEXT NOT NULL,

    CONSTRAINT "UserBTCAddress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserBTCAddress_address_key" ON "UserBTCAddress"("address");

-- AddForeignKey
ALTER TABLE "BTCIncomingTransaction" ADD CONSTRAINT "BTCIncomingTransaction_senderAddress_fkey" FOREIGN KEY ("senderAddress") REFERENCES "UserBTCAddress"("address") ON DELETE RESTRICT ON UPDATE CASCADE;
