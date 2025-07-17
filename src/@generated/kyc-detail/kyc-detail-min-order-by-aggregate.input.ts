import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class KYCDetailMinOrderByAggregateInput {

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

    @Field(() => SortOrder, {nullable:true})
    failedRemarks?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userMetadata?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    whitelabelId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kycApplicantId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kycStage?: keyof typeof SortOrder;
}
