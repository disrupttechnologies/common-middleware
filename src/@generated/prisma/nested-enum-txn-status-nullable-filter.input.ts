import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TxnStatus } from './txn-status.enum';

@InputType()
export class NestedEnumTxnStatusNullableFilter {

    @Field(() => TxnStatus, {nullable:true})
    equals?: keyof typeof TxnStatus;

    @Field(() => [TxnStatus], {nullable:true})
    in?: Array<keyof typeof TxnStatus>;

    @Field(() => [TxnStatus], {nullable:true})
    notIn?: Array<keyof typeof TxnStatus>;

    @Field(() => NestedEnumTxnStatusNullableFilter, {nullable:true})
    not?: NestedEnumTxnStatusNullableFilter;
}
