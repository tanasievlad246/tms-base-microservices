import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuardGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const cookie = this.extractTokenFromCookie(request);

    try {
      const payload = await this.jwtService.verifyAsync(cookie, {
        secret: 'secret',
      });
      request.user = payload;
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException('Invalid token');
    }
    return true;
  }

  private extractTokenFromCookie(request: Request): string {
    // find the jwt cookie
    const cookieList = request.headers.cookie.split(';');
    const jwtCookie = cookieList
      .find((cookie) => cookie.startsWith('jwt='))
      .replace('jwt=', '');
    return jwtCookie;
  }
}
