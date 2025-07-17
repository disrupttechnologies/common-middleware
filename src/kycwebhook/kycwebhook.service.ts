import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
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

  async handleApplicantReviewed(data: any) {
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
        const record = await this.prisma.kYCUser.update({
          where: {
            kycApplicantId: applicantId,
          },
          data: {
            kycStatus: status,
            kycData: null,
          },
          select: {
            userId: true,
            whitelabelId: true,
            kycStatus: true,
          },
        });

        await this.invokeWhitelabel(record.whitelabelId, {
          userId: record.userId,
          kycStatus: record.kycStatus,
          type: data['type'],
        });
      }
    }
  }

  async handleApplicantCreated(data: any) {
    const kycApplicantId = data['applicantId'];
    const rawExternalUserId = data['externalUserId'];
    const idParts = rawExternalUserId.split('-');
    const userId = idParts[0];
    const whitelabelId = idParts[1];
    const inspectionId = data['inspectionId'];

    await this.prisma.kYCUser.create({
      data: {
        userId,
        whitelabelId,
        kycApplicantId,
        inspectionId,
      },
      select: {
        userId: true,
      },
    });
  }

  async handleApplicantPending(data: any) {
    const kycApplicantId = data['applicantId'];
    const inspectionId = data['inspectionId'];

    const record = await this.prisma.kYCUser.update({
      where: {
        kycApplicantId,
      },
      data: {
        kycStatus: 'PENDING',
        inspectionId,
      },
      select: {
        userId: true,
        whitelabelId: true,
        kycStatus: true,
      },
    });

    await this.invokeWhitelabel(record.whitelabelId, {
      userId: record.userId,
      kycStatus: record.kycStatus,
      inspectionId,
      type: data['type'],
    });
  }

  async handleSubsubWebHook(data: any) {
    try {
      const actionType = data['type'];
      switch (actionType) {
        case 'applicantReviewed':
          await this.handleApplicantReviewed(data);
          break;
        case 'applicantCreated':
          await this.handleApplicantCreated(data);
          break;
        // case 'applicantPending':
        //   await this.handleApplicantPending(data);

        //   break;
      }
    } catch (err) {}

    return 'success';
  }

  createSignature(data: any) {
    const signature = crypto.createHmac(
      'sha256',
      process.env.WHITE_LABEL_WEBHOOK_SECRET,
    );
    if (data instanceof iFormData) {
      signature.update(data.getBuffer());
    } else if (data) {
      signature.update(data);
    }
    return {
      'X-App-Access-Sig': signature.digest('hex'),
    };
  }

  async invokeWhitelabel(whitelabelId: string, payload: any) {
    try {
      const whitelabelConfig = this.whitelabelConfig[whitelabelId];
      if (!whitelabelConfig) {
        return;
      }
      const url = `${whitelabelConfig.backendUri}/middlewarehooks/kyc`;
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...this.createSignature(JSON.stringify(payload)),
      };
      await this.http.axiosRef.post(url, payload, {
        headers,
      });
    } catch (err) {
      console.error('Err', err);
    }
  }
}
