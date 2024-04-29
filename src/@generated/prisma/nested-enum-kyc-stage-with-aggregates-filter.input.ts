import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KYCStage } from './kyc-stage.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumKYCStageFilter } from './nested-enum-kyc-stage-filter.input';

@InputType()
export class NestedEnumKYCStageWithAggregatesFilter {

    @Field(() => KYCStage, {nullable:true})
    equals?: keyof typeof KYCStage;

    @Field(() => [KYCStage], {nullable:true})
    in?: Array<keyof typeof KYCStage>;

    @Field(() => [KYCStage], {nullable:true})
    notIn?: Array<keyof typeof KYCStage>;

    @Field(() => NestedEnumKYCStageWithAggregatesFilter, {nullable:true})
    not?: NestedEnumKYCStageWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumKYCStageFilter, {nullable:true})
    _min?: NestedEnumKYCStageFilter;

    @Field(() => NestedEnumKYCStageFilter, {nullable:true})
    _max?: NestedEnumKYCStageFilter;
}
