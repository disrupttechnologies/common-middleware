import { registerEnumType } from '@nestjs/graphql';

export enum KYCStage {
  NOT_INITIALIZED = 'NOT_INITIALIZED',
  ID_CREATED = 'ID_CREATED',
  PASSPORT_UPLOADED = 'PASSPORT_UPLOADED',
  SELFIE_UPLOADED = 'SELFIE_UPLOADED',
  REQUEST_CHECKED = 'REQUEST_CHECKED',
}

registerEnumType(KYCStage, { name: 'KYCStage', description: undefined });
