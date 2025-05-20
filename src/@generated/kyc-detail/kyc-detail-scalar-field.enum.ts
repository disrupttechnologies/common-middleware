import { registerEnumType } from '@nestjs/graphql';

export enum KYCDetailScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  userId = 'userId',
  kycStatus = 'kycStatus',
  failedRemarks = 'failedRemarks',
  userMetadata = 'userMetadata',
  whitelabelId = 'whitelabelId',
  kycApplicantId = 'kycApplicantId',
  kycStage = 'kycStage',
}

registerEnumType(KYCDetailScalarFieldEnum, {
  name: 'KYCDetailScalarFieldEnum',
  description: undefined,
});
