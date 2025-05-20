import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KYCDetailWhereUniqueInput } from '../kyc-detail/kyc-detail-where-unique.input';
import { Type } from 'class-transformer';
import { KYCDetailCreateInput } from '../kyc-detail/kyc-detail-create.input';
import { KYCDetailUpdateInput } from '../kyc-detail/kyc-detail-update.input';

@ArgsType()
export class UpsertOneKycDetailArgs {

    @Field(() => KYCDetailWhereUniqueInput, {nullable:false})
    @Type(() => KYCDetailWhereUniqueInput)
    where!: KYCDetailWhereUniqueInput;

    @Field(() => KYCDetailCreateInput, {nullable:false})
    @Type(() => KYCDetailCreateInput)
    create!: KYCDetailCreateInput;

    @Field(() => KYCDetailUpdateInput, {nullable:false})
    @Type(() => KYCDetailUpdateInput)
    update!: KYCDetailUpdateInput;
}
