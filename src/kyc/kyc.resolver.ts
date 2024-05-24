import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { KycService } from './kyc.service';
import { OkResponse } from 'src/common/models/okresponse.model';
import { UserEntity } from 'src/common/decorators/user.decorator';
import { CreateKYCsInput } from './dto/createkyc.dto';
import { KYCDetail } from 'src/@generated/kyc-detail/kyc-detail.model';
import { KYCDetailWhereInput } from 'src/@generated/kyc-detail/kyc-detail-where.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { Cron } from '@nestjs/schedule';
import {
  GetKYCAccessTokenInput,
  GetKYCAccessTokenInputResponse,
  GetKYCResponseInput,
  GetKYCResponses,
} from './dto/getKYCresponse';

@UseGuards(GqlAuthGuard)
@Resolver()
export class KycResolver {
  constructor(private readonly kycService: KycService) {
    this.handleKYC();
  }

  @Mutation(() => OkResponse)
  createKYC(@Args('data') data: CreateKYCsInput, @UserEntity() user: any) {
    return this.kycService.createMany(user.whitelabelId, data);
  }

  @Query(() => [KYCDetail])
  getKYCDetails(
    @Args({ name: 'where', defaultValue: {} })
    where: KYCDetailWhereInput,
  ) {
    return this.kycService.getKYCDetails(where);
  }

  @Query(() => GetKYCResponses)
  getKYCResponses(
    @Args({ name: 'data', defaultValue: {} })
    where: GetKYCResponseInput,
  ) {
    return {
      data: this.kycService.getKYCResponses(where),
    };
  }

  @Query(() => GetKYCAccessTokenInputResponse)
  getKYCAccessToken(
    @Args({ name: 'data', defaultValue: {} })
    where: GetKYCAccessTokenInput,
  ) {
    return {
      token: this.kycService.getKYCAccessToken(where),
    };
  }

  @Cron('*/2 * * * *')
  async handleKYC() {
    try {
      await this.kycService.handleKYC();
    } catch (err) {
      console.error('errrr', err);
    }
  }
}
