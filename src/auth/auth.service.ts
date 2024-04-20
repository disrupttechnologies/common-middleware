import { PrismaService } from 'nestjs-prisma';
import {
  Injectable,

} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Token } from './models/token.model';
import { SecurityConfig } from '../common/configs/config.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}


  

  validateUser(userId: string) {
    if (userId.toLowerCase()=== process.env.API_KEY.toLowerCase()) {
      return true;
    }
    return false

  }


  generateTokens(payload: { userId: string,whitelabelId:string }): Token {
    return {
      accessToken: this.generateAccessToken(payload),
      refreshToken: this.generateRefreshToken(payload),
    };
  }

  private generateAccessToken(payload: { userId: string,whitelabelId:string  }): string {
    return this.jwtService.sign(payload);
  }

  private generateRefreshToken(payload: { userId: string }): string {
    const securityConfig = this.configService.get<SecurityConfig>('security');
    return this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_REFRESH_SECRET'),
      expiresIn: securityConfig.refreshIn,
    });
  }

 
}
