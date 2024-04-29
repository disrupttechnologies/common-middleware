import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateKYCInput } from './dto/createkyc.dto';
import { OkResponse } from 'src/common/models/okresponse.model';
import { KYCDetailWhereInput } from 'src/@generated/kyc-detail/kyc-detail-where.input';
import { KYCDetail } from 'src/@generated/kyc-detail/kyc-detail.model';
import { KycStatus } from 'src/@generated/prisma/kyc-status.enum';
import { ConfigService } from '@nestjs/config';
import { SumSubConfig } from 'src/common/configs/config.interface';
import { HttpService } from '@nestjs/axios';
import crypto from 'crypto';
import moment from 'moment';
import {AxiosRequestConfig } from "axios"
@Injectable()
export class SumSubService {
  private sumSubConfig: SumSubConfig;


  constructor(
    private readonly config: ConfigService,
    private readonly http: HttpService,
  ) {
    this.sumSubConfig = config.get<SumSubConfig>('sumsub');
    
  }
  

  createSignature(method:string, url:string, data:any) {

    const ts = Math.floor(Date.now() / 1000);
    const signature = crypto.createHmac('sha256', this.sumSubConfig.secret);
    const message = ts + method.toUpperCase() + url.replace("https://api.sumsub.com", "")
    signature.update(message);

    if (data instanceof FormData) {
      //@ts-ignore
        signature.update(data.getBuffer());
    } else if (data) {
        signature.update(data);
    }

    return {
        'X-App-Access-Ts': ts,
        'X-App-Access-Sig': signature.digest('hex')
    };
}


  
  
    

  async createApplicant(userId: string) {
    const levelName = 'basic-kyc-level';
    const method = 'POST';
    const url = `${this.sumSubConfig.apiURL}/resources/applicants?levelName=${encodeURIComponent(levelName)}`;
    const externalUserId = "random-JSToken-" + Math.random().toString(36).slice(2, 9);

    const body = {
        externalUserId: externalUserId
    };
  
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-App-Token': this.sumSubConfig.token,
      ...this.createSignature(method, url, JSON.stringify(body))
  };
   
    const response = await this.http.axiosRef.post(url, body, { headers });
    return response.data.id
  }

  async uploadDocs(data: { userId: string }) {}

  async initKYC(data: KYCDetail): Promise<string> {
    const applicantId = await this.createApplicant(data.userId);
    return applicantId
  }
}
