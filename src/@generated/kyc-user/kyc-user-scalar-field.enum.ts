import { registerEnumType } from '@nestjs/graphql';

export enum KYCUserScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  userId = 'userId',
  whitelabelId = 'whitelabelId',
  kycApplicantId = 'kycApplicantId',
  kycStatus = 'kycStatus',
  inspectionId = 'inspectionId',
  kycData = 'kycData',
  metadata = 'metadata',
}

registerEnumType(KYCUserScalarFieldEnum, {
  name: 'KYCUserScalarFieldEnum',
  description: undefined,
});
