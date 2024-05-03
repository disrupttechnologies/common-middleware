import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { KYCDetail } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { WhitelabelConfig } from 'src/common/configs/config.interface';
import crypto from 'crypto';
import iFormData from 'form-data';

@Injectable()
export class KycwebhookService {
  private whitelabelConfig: WhitelabelConfig;

  constructor(
    private readonly prisma: PrismaService,
    private readonly http: HttpService,
    private readonly config: ConfigService,
  ) {
    this.whitelabelConfig = config.get<WhitelabelConfig>('whitelabelConfig');
  }

  async create(data: any) {
    const applicantId = data['applicantId'];
    const isCompleted = data['reviewStatus'] === 'completed';
    const reviewAnswer = data['reviewResult']['reviewAnswer'];

    if (isCompleted) {
      let status: 'RETRY' | 'FAILED' | 'SUCCESS';
      if (reviewAnswer === 'RED') {
        if (data['reviewResult']['reviewRejectType'] === 'RETRY') {
          status = 'RETRY';
        } else if (data['reviewResult']['reviewRejectType'] === 'FINAL') {
          status = 'FAILED';
        }
      } else if (reviewAnswer === 'GREEN') {
        status = 'SUCCESS';
      }
      if (status) {
        const record = await this.prisma.kYCDetail.update({
          where: {
            kycApplicantId: applicantId,
          },
          data: {
            kycStatus: status,
          },
          select: {
            userId: true,
            whitelabelId: true,
            kycStatus: true,
          },
        });

        this.invokeWhitelabel(record);
      }
    }

    return 'success';
  }

  createSignature(data: any) {
    const signature = crypto.createHmac(
      'sha256',
      process.env.WHITE_LABEL_WEBHOOK_SECRET,
    );
    if (data instanceof iFormData) {
      //@ts-ignore
      signature.update(data.getBuffer());
    } else if (data) {
      signature.update(data);
    }
    return {
      'X-App-Access-Sig': signature.digest('hex'),
    };
  }

  async invokeWhitelabel(record: {
    userId: string;
    whitelabelId: string;
    kycStatus: import('.prisma/client').KycStatus;
  }) {
    const url = `${
      this.whitelabelConfig[record.whitelabelId].backendUri
    }/kycwebhook`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...this.createSignature(JSON.stringify(record)),
    };

    try {
      await this.http.axiosRef.post(url, record, {
        headers,
      });
    } catch (err) {
      console.error('Err', err);
    }
  }
}