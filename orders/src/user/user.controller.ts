import {
  Controller,
  Post,
  Body,
  Res,
  Req,
  Get,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Response, Request } from 'express';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthGuardGuard } from 'src/auth-guard/auth-guard.guard';
import { UserPayload } from 'src/types/express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signUp(
    @Body() createUserDto: CreateUserDto,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const tenantId = req.tenantId;

    const newUser = await this.userService.create(createUserDto, tenantId);
    const { password, email } = newUser;
    const token = await this.userService.signIn(email, password, tenantId);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...createdUser } = newUser;

    res
      .cookie('jwt', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        expires: new Date(Date.now() + 1 * 24 * 60 * 1000), // 1 day
      })
      .send(createdUser);
  }

  @Post('signin')
  async signIn(
    @Body() loginUserDto: LoginUserDto,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { email, password } = loginUserDto;
    const tenantId = req.tenantId;

    const token = await this.userService.signIn(email, password, tenantId);

    res
      .cookie('jwt', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        expires: new Date(Date.now() + 1 * 24 * 60 * 1000), // 1 day
      })
      .send();
  }

  @Post('signout')
  async signOut(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('jwt').send();
  }

  @Get('me')
  @UseGuards(AuthGuardGuard)
  getMe(@Req() req: Request): UserPayload {
    return req.user;
  }
}
