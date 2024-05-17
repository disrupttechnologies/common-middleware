import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { FundsmanagerService } from './fundsmanager.service';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { OkResponse } from 'src/common/models/okresponse.model';
import { CreateIncomingTxnsInput } from './dto/createincomingtxns.input';
import { UserEntity } from 'src/common/decorators/user.decorator';
import { WhitelabelIncomingTransactionWhereInput } from 'src/@generated/whitelabel-incoming-transaction/whitelabel-incoming-transaction-where.input';
import { WhitelabelIncomingTransaction } from 'src/@generated/whitelabel-incoming-transaction/whitelabel-incoming-transaction.model';

@UseGuards(GqlAuthGuard)
@Resolver('Fundsmanager')
export class FundsmanagerResolver {
  constructor(private readonly fundsManagerService: FundsmanagerService) {}

  @Mutation(() => OkResponse)
  async createIncomingTxns(
    @UserEntity() user: any,
    @Args('data') data: CreateIncomingTxnsInput,
  ) {
    return this.fundsManagerService.createIncomingTxns(user.whitelabelId, data);
  }

  @Query(() => [WhitelabelIncomingTransaction])
  async getIncomingTxns(@Args('where') where: WhitelabelIncomingTransactionWhereInput) {
    return this.fundsManagerService.getIncomingTxns(where);
  }
}
