import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KycStatus } from './kyc-status.enum';
import { NestedEnumKycStatusFilter } from './nested-enum-kyc-status-filter.input';

@InputType()
export class EnumKycStatusFilter {
  @Field(() => KycStatus, { nullable: true })
  equals?: keyof typeof KycStatus;

  @Field(() => [KycStatus], { nullable: true })
  in?: Array<keyof typeof KycStatus>;

  @Field(() => [KycStatus], { nullable: true })
  notIn?: Array<keyof typeof KycStatus>;

  @Field(() => NestedEnumKycStatusFilter, { nullable: true })
  not?: NestedEnumKycStatusFilter;
}
