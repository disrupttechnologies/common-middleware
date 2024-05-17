import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IncomingTxnStatus } from './incoming-txn-status.enum';
import { NestedEnumIncomingTxnStatusNullableFilter } from './nested-enum-incoming-txn-status-nullable-filter.input';

@InputType()
export class EnumIncomingTxnStatusNullableFilter {

    @Field(() => IncomingTxnStatus, {nullable:true})
    equals?: keyof typeof IncomingTxnStatus;

    @Field(() => [IncomingTxnStatus], {nullable:true})
    in?: Array<keyof typeof IncomingTxnStatus>;

    @Field(() => [IncomingTxnStatus], {nullable:true})
    notIn?: Array<keyof typeof IncomingTxnStatus>;

    @Field(() => NestedEnumIncomingTxnStatusNullableFilter, {nullable:true})
    not?: NestedEnumIncomingTxnStatusNullableFilter;
}
