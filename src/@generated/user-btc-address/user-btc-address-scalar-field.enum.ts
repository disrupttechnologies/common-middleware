import { registerEnumType } from '@nestjs/graphql';

export enum UserBTCAddressScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    address = "address",
    userId = "userId",
    whitelabelId = "whitelabelId"
}


registerEnumType(UserBTCAddressScalarFieldEnum, { name: 'UserBTCAddressScalarFieldEnum', description: undefined })
