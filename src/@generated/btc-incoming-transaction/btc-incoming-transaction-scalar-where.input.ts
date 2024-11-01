import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumTxnStatusFilter } from '../prisma/enum-txn-status-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class BTCIncomingTransactionScalarWhereInput {

    @Field(() => [BTCIncomingTransactionScalarWhereInput], {nullable:true})
    AND?: Array<BTCIncomingTransactionScalarWhereInput>;

    @Field(() => [BTCIncomingTransactionScalarWhereInput], {nullable:true})
    OR?: Array<BTCIncomingTransactionScalarWhereInput>;

    @Field(() => [BTCIncomingTransactionScalarWhereInput], {nullable:true})
    NOT?: Array<BTCIncomingTransactionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    txnHash?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    binanceTxnId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    txnTime?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    amount?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    senderAddress?: StringFilter;

    @Field(() => EnumTxnStatusFilter, {nullable:true})
    txnStatus?: EnumTxnStatusFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    failedRemarks?: StringNullableFilter;
}
