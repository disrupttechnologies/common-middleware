import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateKYCInput } from './dto/createkyc.dto';
import { OkResponse } from 'src/common/models/okresponse.model';
import { KYCDetailWhereInput } from 'src/@generated/kyc-detail/kyc-detail-where.input';
import { SumSubService } from './sumsub.service';
import { KycStatus } from 'src/@generated/prisma/kyc-status.enum';

@Injectable()
export class KycService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly sumsub: SumSubService,
  ) {}

  async create(
    whitelabelId: string,
    data: CreateKYCInput,
  ): Promise<OkResponse> {
    await this.prisma.kYCDetail.create({
      data: {
        whitelabelId,
        ...data,
      },
      select: {
        id: true,
      },
    });

    return {
      message: 'success',
    };
  }

  getKYCDetails(where: KYCDetailWhereInput) {
    return this.prisma.kYCDetail.findMany({ where });
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
            kycStatus: 'PENDING',
          },
          select: {
            id: true,
          },
        });
      } catch (err) {}
     
    }
  }

  async handleKYC() {
    await this.handleNotInitialized();
    await this.handleNotInitialized();

  }
}
