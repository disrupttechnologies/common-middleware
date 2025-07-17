import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KYCDetailUpdateInput } from '../kyc-detail/kyc-detail-update.input';
import { Type } from 'class-transformer';
import { KYCDetailWhereUniqueInput } from '../kyc-detail/kyc-detail-where-unique.input';

@ArgsType()
export class UpdateOneKycDetailArgs {

    @Field(() => KYCDetailUpdateInput, {nullable:false})
    @Type(() => KYCDetailUpdateInput)
    data!: KYCDetailUpdateInput;

    @Field(() => KYCDetailWhereUniqueInput, {nullable:false})
    @Type(() => KYCDetailWhereUniqueInput)
    where!: KYCDetailWhereUniqueInput;
}
