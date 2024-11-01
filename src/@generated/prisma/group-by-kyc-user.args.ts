import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KYCUserWhereInput } from '../kyc-user/kyc-user-where.input';
import { Type } from 'class-transformer';
import { KYCUserOrderByWithAggregationInput } from '../kyc-user/kyc-user-order-by-with-aggregation.input';
import { KYCUserScalarFieldEnum } from '../kyc-user/kyc-user-scalar-field.enum';
import { KYCUserScalarWhereWithAggregatesInput } from '../kyc-user/kyc-user-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByKycUserArgs {

    @Field(() => KYCUserWhereInput, {nullable:true})
    @Type(() => KYCUserWhereInput)
    where?: KYCUserWhereInput;

    @Field(() => [KYCUserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<KYCUserOrderByWithAggregationInput>;

    @Field(() => [KYCUserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof KYCUserScalarFieldEnum>;

    @Field(() => KYCUserScalarWhereWithAggregatesInput, {nullable:true})
    having?: KYCUserScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
