import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KYCStage } from './kyc-stage.enum';
import { NestedEnumKYCStageFilter } from './nested-enum-kyc-stage-filter.input';

@InputType()
export class EnumKYCStageFilter {
  @Field(() => KYCStage, { nullable: true })
  equals?: keyof typeof KYCStage;

  @Field(() => [KYCStage], { nullable: true })
  in?: Array<keyof typeof KYCStage>;

  @Field(() => [KYCStage], { nullable: true })
  notIn?: Array<keyof typeof KYCStage>;

  @Field(() => NestedEnumKYCStageFilter, { nullable: true })
  not?: NestedEnumKYCStageFilter;
}
