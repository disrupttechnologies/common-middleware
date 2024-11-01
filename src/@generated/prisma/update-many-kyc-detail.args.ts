import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KYCDetailUpdateManyMutationInput } from '../kyc-detail/kyc-detail-update-many-mutation.input';
import { Type } from 'class-transformer';
import { KYCDetailWhereInput } from '../kyc-detail/kyc-detail-where.input';

@ArgsType()
export class UpdateManyKycDetailArgs {

    @Field(() => KYCDetailUpdateManyMutationInput, {nullable:false})
    @Type(() => KYCDetailUpdateManyMutationInput)
    data!: KYCDetailUpdateManyMutationInput;

    @Field(() => KYCDetailWhereInput, {nullable:true})
    @Type(() => KYCDetailWhereInput)
    where?: KYCDetailWhereInput;
}
