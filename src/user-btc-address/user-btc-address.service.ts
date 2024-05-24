import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreateUserBtcAddressInput } from './dto/create-user-btc-address.input';
import { validate as validateBTCAddress } from 'bitcoin-address-validation';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { OkResponse } from 'src/common/models/okresponse.model';

@Injectable()
export class UserBtcAddressService {
  constructor(private readonly prisma: PrismaService) {}
  async create(
    whitelabelId: string,
    createUserBtcAddressInput: CreateUserBtcAddressInput,
  ): Promise<OkResponse> {
    if (!validateBTCAddress(createUserBtcAddressInput.address)) {
      return new BadRequestException('Invalid BTC Address');
    }

    try {
      await this.prisma.userBTCAddress.create({
        data: {
          userId: createUserBtcAddressInput.userId,
          address: createUserBtcAddressInput.address.toLowerCase(),
          whitelabelId,
        },
      });
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2002'
      ) {
        throw new ConflictException(`Address already exsists.`);
      }
    }

    return {
      message: 'success',
    };
  }

  getUserAddresses(userId: string, whitelabelId: string) {
    return this.prisma.userBTCAddress.findMany({
      where: {
        userId,
        whitelabelId,
      },
      select: {
        address: true,
      },
    });
  }
}
