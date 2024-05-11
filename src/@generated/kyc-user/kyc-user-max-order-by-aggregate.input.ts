import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class KYCUserMaxOrderByAggregateInput {

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

    @Field(() => SortOrder, {nullable:true})
    kycApplicantId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kycStatus?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    inspectionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kycData?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    metadata?: keyof typeof SortOrder;
}
