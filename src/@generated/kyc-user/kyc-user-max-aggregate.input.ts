import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class KYCUserMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    whitelabelId?: true;

    @Field(() => Boolean, {nullable:true})
    kycApplicantId?: true;

    @Field(() => Boolean, {nullable:true})
    kycStatus?: true;

    @Field(() => Boolean, {nullable:true})
    inspectionId?: true;

    @Field(() => Boolean, {nullable:true})
    kycData?: true;

    @Field(() => Boolean, {nullable:true})
    metadata?: true;
}
