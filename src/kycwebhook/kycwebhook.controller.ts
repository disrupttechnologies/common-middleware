import {
  Controller,
  Post,
  Body,
  Req,
  RawBodyRequest,
  BadRequestException,
} from '@nestjs/common';
import { KycwebhookService } from './kycwebhook.service';
import crypto from 'crypto';

@Controller('kycwebhook')
export class KycwebhookController {
  constructor(private readonly kycwebhookService: KycwebhookService) {}

  @Post()
  handleSubsubWebHook(
    @Body() createKycwebhookDto: any,
    @Req() req: RawBodyRequest<Request>,
  ) {
    const digestAlg = req.headers['x-payload-digest-alg'];

    const algo = {
      HMAC_SHA1_HEX: 'sha1',
      HMAC_SHA256_HEX: 'sha256',
      HMAC_SHA512_HEX: 'sha512',
    }[digestAlg];

    if (!algo) {
      throw new Error('Unsupported algorithm');
    }

    const calculatedDigest = crypto
      .createHmac(algo, process.env.SUMSUB_WEBHOOK_SECRET)
      .update(req.rawBody)
      .digest('hex');

    const isValid = calculatedDigest === req.headers['x-payload-digest'];
    if (!isValid) {
      throw new BadRequestException('Unauthorized');
    }
    return this.kycwebhookService.handleSubsubWebHook(createKycwebhookDto);
  }
}
