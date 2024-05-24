import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Token } from './models/token.model';
import { LoginInput } from './dto/login.input';
import { UnauthorizedException } from '@nestjs/common';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly auth: AuthService) {}

  @Mutation(() => Token)
  async login(@Args('data') data: LoginInput) {
    if (data.key !== process.env.API_KEY) {
      throw new UnauthorizedException('Invalid Key');
    }
    return this.auth.generateTokens({
      userId: data.key,
      whitelabelId: data.whitelabelId,
    });
  }
}
