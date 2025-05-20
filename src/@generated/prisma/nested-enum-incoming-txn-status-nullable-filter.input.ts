import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IncomingTxnStatus } from './incoming-txn-status.enum';

@InputType()
export class NestedEnumIncomingTxnStatusNullableFilter {

    @Field(() => IncomingTxnStatus, {nullable:true})
    equals?: keyof typeof IncomingTxnStatus;

    @Field(() => [IncomingTxnStatus], {nullable:true})
    in?: Array<keyof typeof IncomingTxnStatus>;

    @Field(() => [IncomingTxnStatus], {nullable:true})
    notIn?: Array<keyof typeof IncomingTxnStatus>;

    @Field(() => NestedEnumIncomingTxnStatusNullableFilter, {nullable:true})
    not?: NestedEnumIncomingTxnStatusNullableFilter;
}
