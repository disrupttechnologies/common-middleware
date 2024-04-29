import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KycStatus } from './kyc-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumKycStatusFilter } from './nested-enum-kyc-status-filter.input';

@InputType()
export class NestedEnumKycStatusWithAggregatesFilter {

    @Field(() => KycStatus, {nullable:true})
    equals?: keyof typeof KycStatus;

    @Field(() => [KycStatus], {nullable:true})
    in?: Array<keyof typeof KycStatus>;

    @Field(() => [KycStatus], {nullable:true})
    notIn?: Array<keyof typeof KycStatus>;

    @Field(() => NestedEnumKycStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumKycStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumKycStatusFilter, {nullable:true})
    _min?: NestedEnumKycStatusFilter;

    @Field(() => NestedEnumKycStatusFilter, {nullable:true})
    _max?: NestedEnumKycStatusFilter;
}
