import { Controller, Post, Delete, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import * as dto from './dto/all';

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

  @Post('user/sessions')
  async getUserSessions(@Body() body: dto.UserSessions): Promise<dto.RegisteredUser | HttpException> {
    const user = await this.userService.getUserSessions(body);
    if(user) return user;
    throw new HttpException('Invalid login credentials.', HttpStatus.BAD_REQUEST);
  }

  @Post('users')
  async getUsers(@Body() body: dto.Users): Promise<dto.User[]> {
    return await this.userService.getUsers(body);
  }

  @Delete('user/delete')
  async deleteUser(@Body() body: dto.Delete): Promise<dto.RegisteredUser | HttpException> {
    const user = await this.userService.deleteUser(body);
    if(user) return user;
    throw new HttpException('Account does not exist.', HttpStatus.BAD_REQUEST);
  }
}
