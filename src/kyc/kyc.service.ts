import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import {  CreateKYCsInput } from './dto/createkyc.dto';
import { OkResponse } from 'src/common/models/okresponse.model';
import { KYCDetailWhereInput } from 'src/@generated/kyc-detail/kyc-detail-where.input';
import { SumSubService } from './sumsub.service';
import { GetKYCAccessTokenInput, GetKYCResponseInput } from './dto/getKYCresponse';

@Injectable()
export class KycService {
 
  constructor(
    private readonly prisma: PrismaService,
    private readonly sumsub: SumSubService,
  ) {}

  async createMany(
    whitelabelId: string,
    input:CreateKYCsInput,
  ): Promise<OkResponse> {

    const items = input.data.map((item) => {
      return {...item,whitelabelId}
    })
    await this.prisma.kYCDetail.createMany({
      data: items,
    });

    return {
      message: 'success',
    };
  }

  getKYCDetails(where: KYCDetailWhereInput) {
    return this.prisma.kYCDetail.findMany({ where });
  }

  async handleUploadPassport() {
    const records = await this.prisma.kYCDetail.findMany({
      where: {
        kycStage: 'SELFIE_UPLOADED',
      },
    });

    for (const record of records) {
      try {
        const isSuccessful = await this.sumsub.handlePassportUpload(record);
        if (isSuccessful) {
          await this.prisma.kYCDetail.update({
            where: {
              id: record.id,
            },
            data: {
              kycStage: 'PASSPORT_UPLOADED',
            },
            select: {
              id: true,
            },
          });
        }
      } catch (err) {
        console.log('handleUploadPassport', err);
      }
    }
  }

  async handleRequestCheck() {
    const records = await this.prisma.kYCDetail.findMany({
      where: {
        kycStage: 'PASSPORT_UPLOADED',
      },
      select: {
        id: true,
        kycApplicantId: true,
      },
    });

    for (const record of records) {
      try {
        const isSuccessful = await this.sumsub.handleRequestCheck(
          record.kycApplicantId,
        );
        if (isSuccessful) {
          await this.prisma.kYCDetail.update({
            where: {
              id: record.id,
            },
            data: {
              kycStage: 'REQUEST_CHECKED',
            },
            select: {
              id: true,
            },
          });
        }
      } catch (err) {
        console.log('handleUploadSelfie', err);
      }
    }
  }
  async handleUploadSelfie() {
    const records = await this.prisma.kYCDetail.findMany({
      where: {
        kycStage: 'ID_CREATED',
      },
    });

    for (const record of records) {
      try {
        const isSuccessful = await this.sumsub.handleSelfieUpload(record);
        if (isSuccessful) {
          await this.prisma.kYCDetail.update({
            where: {
              id: record.id,
            },
            data: {
              kycStage: 'SELFIE_UPLOADED',
            },
            select: {
              id: true,
            },
          });
        }
      } catch (err) {
        console.log('handleUploadSelfie', err);
      }
    }
  }
  async handleNotInitialized() {
    const records = await this.prisma.kYCDetail.findMany({
      where: {
        kycStatus: 'NOT_INITIALIZED',
        kycApplicantId: null,
      },
    });

    for (const record of records) {
      try {
        const applicantId = await this.sumsub.initKYC(record);
        await this.prisma.kYCDetail.update({
          where: {
            id: record.id,
          },
          data: {
            kycApplicantId: applicantId,
            kycStage: 'ID_CREATED',
            kycStatus: 'PENDING',
          },
          select: {
            id: true,
          },
        });
      } catch (err) {
        console.log('handleNotInitialized', err);
      }
    }
  }




  getKYCResponses(where: GetKYCResponseInput) {
    return this.prisma.kYCDetail.findMany({
      where: {
        userId: {
         in:where.ids
       }
      },
      select: {
        userId: true,
        kycStatus:true,
      }
    })
  }
  async handleKYC() {
    await this.handleNotInitialized();
    await this.handleUploadPassport();
    await this.handleUploadSelfie();
    await this.handleRequestCheck();
  }




  getKYCAccessToken(where: GetKYCAccessTokenInput) {
    return this.sumsub.getKYCAccessToken(where.userId);
  }
  
}
