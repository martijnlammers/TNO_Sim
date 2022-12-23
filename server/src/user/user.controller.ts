import { Controller, Post, Delete, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import * as dto from './dto/all';

interface Error {
  error: string
}

@Controller('/')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('user/register')
  async registerUser(@Body() body: dto.Register): Promise<dto.RegisteredUser | HttpException> {
    const user = await this.userService.registerUser(body);
    if(user) return user;
    throw new HttpException('Account already registered.', HttpStatus.BAD_REQUEST);
  }

  @Post('user/login')
  async loginUser(@Body() body: dto.Login): Promise<dto.RegisteredUser | HttpException> {
    const user = await this.userService.loginUser(body);
    if(user) return user;
    throw new HttpException('Invalid login credentials.', HttpStatus.BAD_REQUEST);
  }

  @Post('users')
  async readUsers(@Body() body: dto.Users): Promise<dto.UsersPage> {
    return await this.userService.readUsers(body);
  }

  @Delete('user/delete')
  async deleteUser(@Body() body: dto.Delete): Promise<dto.RegisteredUser | HttpException> {
    const user = await this.userService.deleteUser(body);
    if(user) return user;
    throw new HttpException('Account does not exist.', HttpStatus.BAD_REQUEST);
  }
}
