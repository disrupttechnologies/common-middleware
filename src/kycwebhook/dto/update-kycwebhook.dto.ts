import { PartialType } from '@nestjs/mapped-types';
import { CreateKycwebhookDto } from './create-kycwebhook.dto';

export class UpdateKycwebhookDto extends PartialType(CreateKycwebhookDto) {}
