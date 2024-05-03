import { Injectable, StreamableFile } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateKYCInput } from './dto/createkyc.dto';
import { OkResponse } from 'src/common/models/okresponse.model';
import { KYCDetailWhereInput } from 'src/@generated/kyc-detail/kyc-detail-where.input';
import { KYCDetail } from 'src/@generated/kyc-detail/kyc-detail.model';
import { KycStatus } from 'src/@generated/prisma/kyc-status.enum';
import { ConfigService } from '@nestjs/config';
import { S3Config, SumSubConfig, WhitelabelConfig } from 'src/common/configs/config.interface';
import { HttpService } from '@nestjs/axios';
import { findCountryByIso2 } from 'country-tools';
import { S3 } from '@aws-sdk/client-s3';
import { AwsCredentialIdentity } from '@aws-sdk/types';
import fs from 'fs';
import crypto from 'crypto';
import moment from 'moment';
import iFormData from 'form-data';
import { AxiosRequestConfig } from 'axios';


type KYCProgressResponse ={
  status: KycStatus;
  remark?:string
}


@Injectable()
export class SumSubService {

  private sumSubConfig: SumSubConfig;
  private whitelabelConfig: WhitelabelConfig;

  private s3Config: S3Config;
  private s3Client: S3;

  constructor(
    private readonly config: ConfigService,
    private readonly http: HttpService,
  ) {
    this.sumSubConfig = config.get<SumSubConfig>('sumsub');
    const s3Config = config.get<S3Config>('s3Config');

    const credentials: AwsCredentialIdentity = {
      accessKeyId: s3Config.accessKey,
      secretAccessKey: s3Config.secret,
    };
    this.s3Config = s3Config;
    this.s3Client = new S3({ region: s3Config.region, credentials });
    this.whitelabelConfig  = config.get<WhitelabelConfig>('whitelabelConfig');
  }



  createSignature(method: string, url: string, data: any) {
    const ts = Math.floor(Date.now() / 1000);
    const signature = crypto.createHmac('sha256', this.sumSubConfig.secret);
    const message =
      ts + method.toUpperCase() + url.replace('https://api.sumsub.com', '');
    signature.update(message);

    if (data instanceof iFormData) {
      //@ts-ignore
      signature.update(data.getBuffer());
    } else if (data) {
      signature.update(data);
    }

    return {
      'X-App-Access-Ts': ts,
      'X-App-Access-Sig': signature.digest('hex'),
    };
  }



  async getImageFromS3(bucketName: string, fileName: string) {
    const s3Params = {
      Bucket: bucketName,
      Key: fileName,
    };

    console.log("ssaasas",s3Params)
    const s3File = await this.s3Client.getObject(s3Params);
    const base64Data = Buffer.from(
      await s3File.Body.transformToByteArray(),
    ).toString('base64');

    return `data:image/png;base64,${base64Data}`;
  }

  async createApplicant(data: KYCDetail) {
    const levelName = 'basic-kyc-level';
    const method = 'POST';

    const userData = JSON.parse(data.userMetadata);
    const personalDetails = userData.personalDetails;
    const url = `${
      this.sumSubConfig.apiURL
    }/resources/applicants?levelName=${encodeURIComponent(levelName)}`;
    const body = {
      externalUserId: data.userId,
      fixedInfo: {
        firstName: personalDetails['First Name'].value,
        lastName: personalDetails['Last Name'].value,
        gender: personalDetails['Gender'].value === 'MALE' ? 'M' : 'F',
        dob: personalDetails['Date of Birth'].value,
        country: findCountryByIso2(
          personalDetails['Country of ID Issued'].value,
        ).cca3,
        nationality: findCountryByIso2(personalDetails['Nationality'].value)
          .cca3,
      },
    };
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-App-Token': this.sumSubConfig.token,
      ...this.createSignature(method, url, JSON.stringify(body)),
    };

    const response = await this.http.axiosRef.post(url, body, { headers });
    return response.data.id;
  }

  async uploadPassport(data: KYCDetail) {
    const url = `${this.sumSubConfig.apiURL}/resources/applicants/${data.kycApplicantId}/info/idDoc`;
    const method = 'POST';
    const userData = JSON.parse(data.userMetadata);
    const personalDetails = userData.personalDetails;
    const passportDocFileName = userData.documents.find((item) => {
      return item.documentName === 'Passport Bio Page';
    }).id;

    const passport = await this.getImageFromS3(
      this.whitelabelConfig[data.whitelabelId].s3Bucket,
      passportDocFileName,
    );
    const metadata = {
      idDocType: 'PASSPORT',
      country: findCountryByIso2(personalDetails['Country of ID Issued'].value)
        .cca3,
      firstName: personalDetails['First Name'].value,
      lastName: personalDetails['Last Name'].value,
      issuedDate: moment(personalDetails['Passport Issue Date'].value).format(
        'YYYY-MM-DD',
      ),
      validUntil: moment(personalDetails['Passport Expiry Date'].value).format(
        'YYYY-MM-DD',
      ),
      number: personalDetails['Passport Number'].value,
      dob: personalDetails['Date of Birth'].value,
    };

    const form = new iFormData();
    const base64Data = passport.split(',')[1];
    form.append('content', Buffer.from(base64Data, 'base64'), {
      filename: passportDocFileName,
    });
    form.append('metadata', JSON.stringify(metadata));

    const headers = {
      Accept: 'application/json',
      'X-App-Token': this.sumSubConfig.token,
      ...this.createSignature(method, url, form),
    };

    const response = await this.http.axiosRef.post(url, form, { headers });
    const responseData = response.data;
    return responseData.idDocType === 'PASSPORT';
  }

  async uploadSelfie(data: KYCDetail) {
    const url = `${this.sumSubConfig.apiURL}/resources/applicants/${data.kycApplicantId}/info/idDoc`;
    const method = 'POST';
    const userData = JSON.parse(data.userMetadata);
    const personalDetails = userData.personalDetails;

    const selfieDocFileName = userData.documents.find((item) => {
      return item.documentName === 'Passport Selfie';
    }).id;

    const selfie = await this.getImageFromS3(
      this.whitelabelConfig[data.whitelabelId].s3Bucket,
      selfieDocFileName,
    );
    const metadata = {
      idDocType: 'SELFIE',
      country: findCountryByIso2(personalDetails['Country of ID Issued'].value)
      .cca3,
    };

    const form = new iFormData();
    const base64Data = selfie.split(',')[1];
    form.append('content', Buffer.from(base64Data, 'base64'), {
      filename: selfieDocFileName,
    });
    form.append('metadata', JSON.stringify(metadata));

    const headers = {
      Accept: 'application/json',
      'X-App-Token': this.sumSubConfig.token,
      ...this.createSignature(method, url, form),
    };

    const response = await this.http.axiosRef.post(url, form, { headers });
    const responseData = response.data;
    return responseData.idDocType === 'SELFIE';
  }


  async requestCheck(kycApplicantId: string) {
    const method = 'POST';

    const url = `https://api.sumsub.com/resources/applicants/${kycApplicantId}/status/pending`
    
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-App-Token': this.sumSubConfig.token,
      ...this.createSignature(method, url, JSON.stringify({})),
    };
    const response = await this.http.axiosRef.post(url, JSON.stringify({}), { headers });
    return response.data.ok === 1;
  }

  async initKYC(data: KYCDetail): Promise<string> {
    const applicantId = await this.createApplicant(data);
    return applicantId;
  }

  async handlePassportUpload(data: KYCDetail): Promise<boolean> {
    const isSuccessful = await this.uploadPassport(data);
    return isSuccessful;
  }

  async handleSelfieUpload(data: KYCDetail): Promise<boolean> {
    const isSuccessful = await this.uploadSelfie(data);
    return isSuccessful;
  }

  async  handleRequestCheck(kycApplicantId: string) {
    const isSuccessful = await this.requestCheck(kycApplicantId);
    return isSuccessful;
  }

  
 

  async getKYCAccessToken(userId: string) {
    const levelName = 'basic-kyc-level';

    const url = `https://api.sumsub.com/resources/accessTokens?userId=${userId}&levelName=${levelName}`
    
    
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-App-Token': this.sumSubConfig.token,
      ...this.createSignature("POST", url,JSON.stringify({})),
    };
    const response = await this.http.axiosRef.post(url,JSON.stringify({}), { headers });

    return response.data.token;

  }
 
  
}
