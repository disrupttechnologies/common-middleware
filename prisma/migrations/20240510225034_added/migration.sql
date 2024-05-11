-- CreateTable
CREATE TABLE "KYCUser" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "whitelabelId" TEXT NOT NULL,
    "kycApplicantId" TEXT,
    "kycStatus" "KycStatus" NOT NULL DEFAULT 'NOT_INITIALIZED',
    "inspectionId" TEXT,
    "kycData" TEXT,
    "metadata" TEXT,

    CONSTRAINT "KYCUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "KYCUser_userId_key" ON "KYCUser"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "KYCUser_kycApplicantId_key" ON "KYCUser"("kycApplicantId");

-- CreateIndex
CREATE UNIQUE INDEX "KYCUser_inspectionId_key" ON "KYCUser"("inspectionId");
