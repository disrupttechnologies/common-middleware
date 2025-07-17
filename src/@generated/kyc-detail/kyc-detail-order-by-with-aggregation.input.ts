import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { KYCDetailCountOrderByAggregateInput } from './kyc-detail-count-order-by-aggregate.input';
import { KYCDetailMaxOrderByAggregateInput } from './kyc-detail-max-order-by-aggregate.input';
import { KYCDetailMinOrderByAggregateInput } from './kyc-detail-min-order-by-aggregate.input';

@InputType()
export class KYCDetailOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kycStatus?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    failedRemarks?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    userMetadata?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    whitelabelId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    kycApplicantId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    kycStage?: keyof typeof SortOrder;

    @Field(() => KYCDetailCountOrderByAggregateInput, {nullable:true})
    _count?: KYCDetailCountOrderByAggregateInput;

    @Field(() => KYCDetailMaxOrderByAggregateInput, {nullable:true})
    _max?: KYCDetailMaxOrderByAggregateInput;

    @Field(() => KYCDetailMinOrderByAggregateInput, {nullable:true})
    _min?: KYCDetailMinOrderByAggregateInput;
}
