import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KYCUserWhereInput } from '../kyc-user/kyc-user-where.input';
import { Type } from 'class-transformer';
import { KYCUserOrderByWithRelationInput } from '../kyc-user/kyc-user-order-by-with-relation.input';
import { KYCUserWhereUniqueInput } from '../kyc-user/kyc-user-where-unique.input';
import { Int } from '@nestjs/graphql';
import { KYCUserScalarFieldEnum } from '../kyc-user/kyc-user-scalar-field.enum';

@ArgsType()
export class FindFirstKycUserArgs {

    @Field(() => KYCUserWhereInput, {nullable:true})
    @Type(() => KYCUserWhereInput)
    where?: KYCUserWhereInput;

    @Field(() => [KYCUserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<KYCUserOrderByWithRelationInput>;

    @Field(() => KYCUserWhereUniqueInput, {nullable:true})
    cursor?: KYCUserWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [KYCUserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof KYCUserScalarFieldEnum>;
}
