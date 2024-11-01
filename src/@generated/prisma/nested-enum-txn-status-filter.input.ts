import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TxnStatus } from './txn-status.enum';

@InputType()
export class NestedEnumTxnStatusFilter {

    @Field(() => TxnStatus, {nullable:true})
    equals?: keyof typeof TxnStatus;

    @Field(() => [TxnStatus], {nullable:true})
    in?: Array<keyof typeof TxnStatus>;

    @Field(() => [TxnStatus], {nullable:true})
    notIn?: Array<keyof typeof TxnStatus>;

    @Field(() => NestedEnumTxnStatusFilter, {nullable:true})
    not?: NestedEnumTxnStatusFilter;
}
