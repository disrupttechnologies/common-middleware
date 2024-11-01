import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KYCDetailCreateInput } from '../kyc-detail/kyc-detail-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneKycDetailArgs {

    @Field(() => KYCDetailCreateInput, {nullable:false})
    @Type(() => KYCDetailCreateInput)
    data!: KYCDetailCreateInput;
}
