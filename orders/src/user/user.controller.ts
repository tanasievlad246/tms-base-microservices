import { Controller, Post, Body, Headers, Res, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signUp(
    @Body() createUserDto: CreateUserDto,
    @Headers('origin') origin: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    // check if user already exists
    // if user exists, throw error with status code 400
    // if user does not exist, create user
    console.log(origin);

    const newUser = await this.userService.create(createUserDto, origin);
    const { password, email } = newUser;
    const token = this.userService.signIn(email, password);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...createdUser } = newUser;

    res
      .cookie('jwt', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        expires: new Date(Date.now() + 1 * 24 * 60 * 1000),
      })
      .send(createdUser);
  }

  @Get('isalive')
  isalive() {
    return { status: 'ok' };
  }
}
