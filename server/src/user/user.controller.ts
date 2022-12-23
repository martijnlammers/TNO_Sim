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
  async readAllUsers(@Body() body: dto.AllUsers): Promise<dto.UsersPage> {
    return await this.userService.readAllUsers(body);
  }

  @Post('users/filter/role')
  filterUsersByRole(@Body() body: dto.ReqFilterByRole): dto.ResFilterByRole {
    return this.userService.loginUser(body);
  }

  @Delete('user/delete')
  deleteUser(@Body() body: dto.ReqDelete): dto.ResFilterByRole {
    return this.userService.loginUser(body);
  }
}
