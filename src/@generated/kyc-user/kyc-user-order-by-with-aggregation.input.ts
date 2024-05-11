import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { KYCUserCountOrderByAggregateInput } from './kyc-user-count-order-by-aggregate.input';
import { KYCUserMaxOrderByAggregateInput } from './kyc-user-max-order-by-aggregate.input';
import { KYCUserMinOrderByAggregateInput } from './kyc-user-min-order-by-aggregate.input';

@InputType()
export class KYCUserOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    whitelabelId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    kycApplicantId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    kycStatus?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    inspectionId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    kycData?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => KYCUserCountOrderByAggregateInput, {nullable:true})
    _count?: KYCUserCountOrderByAggregateInput;

    @Field(() => KYCUserMaxOrderByAggregateInput, {nullable:true})
    _max?: KYCUserMaxOrderByAggregateInput;

    @Field(() => KYCUserMinOrderByAggregateInput, {nullable:true})
    _min?: KYCUserMinOrderByAggregateInput;
}
