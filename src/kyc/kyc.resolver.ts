import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { KycService } from './kyc.service';
import { OkResponse } from 'src/common/models/okresponse.model';
import { UserEntity } from 'src/common/decorators/user.decorator';
import { CreateKYCInput } from './dto/createkyc.dto';
import { KYCDetail } from 'src/@generated/kyc-detail/kyc-detail.model';
import { KYCDetailWhereInput } from 'src/@generated/kyc-detail/kyc-detail-where.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { Cron } from '@nestjs/schedule';

@UseGuards(GqlAuthGuard)
@Resolver()
export class KycResolver {
  constructor(private readonly kycService: KycService) {
    this.handleKYC()
  }

  @Mutation(() => OkResponse)
  createKYC(
    @Args('data') data: CreateKYCInput,
    @UserEntity() user: any,
  ) {
    return this.kycService.create(user.whitelabelId, data);
  }

  @Query(() => [KYCDetail])
  getKYCDetails(
    @Args({ name: 'where', defaultValue: {} })
    where: KYCDetailWhereInput,
  ) {
    return this.kycService.getKYCDetails(where);
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
