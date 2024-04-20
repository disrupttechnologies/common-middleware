import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TxnStatus } from './txn-status.enum';
import { NestedEnumTxnStatusNullableFilter } from './nested-enum-txn-status-nullable-filter.input';

@InputType()
export class EnumTxnStatusNullableFilter {

    @Field(() => TxnStatus, {nullable:true})
    equals?: keyof typeof TxnStatus;

    @Field(() => [TxnStatus], {nullable:true})
    in?: Array<keyof typeof TxnStatus>;

    @Field(() => [TxnStatus], {nullable:true})
    notIn?: Array<keyof typeof TxnStatus>;

    @Field(() => NestedEnumTxnStatusNullableFilter, {nullable:true})
    not?: NestedEnumTxnStatusNullableFilter;
}
