
import { Field, InputType } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { KycStatus } from 'src/@generated/prisma/kyc-status.enum';

@ObjectType()
export class GetKYCResponses {


    @Field(() => [KYCResponse], {nullable:false})
    data!: KYCResponse[];

    
}







@ObjectType()
export class KYCResponse {

    @Field(() => ID, {nullable:false})
    userId!: string;
  
    @Field(() => KycStatus, {nullable:false,defaultValue:'NOT_INITIALIZED'})
    kycStatus!: keyof typeof KycStatus;
}






@InputType()
export class GetKYCResponseInput {


  @Field(() => [String])
  ids: string[];
}


@InputType()
export class GetKYCAccessTokenInput {


  @Field(() => String)
  userId: string;
}






@ObjectType()
export class GetKYCAccessTokenInputResponse {


    @Field(() => String , {nullable:false})
    token!: string;

    
}
