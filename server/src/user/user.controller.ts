import { Controller, Post, Delete, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import * as dto from './dto/all';

@Controller('/')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Simple endpoint to register new users to the database.' })
  @Post('user/register')
  async registerUser(@Body() body: dto.Register): Promise<dto.RegisteredUser | HttpException> {
    const user = await this.userService.registerUser(body);
    if(user) return user;
    throw new HttpException('Forbidden.', HttpStatus.BAD_REQUEST);
  }

  @ApiOperation({ summary: 'Checks whether password and email are registered in the database.' })
  @Post('user/login')
  async loginUser(@Body() body: dto.Login): Promise<dto.RegisteredUser | HttpException> {
    const user = await this.userService.loginUser(body);
    if(user) return user;
    throw new HttpException('Forbidden.', HttpStatus.BAD_REQUEST);
  }

  @ApiOperation({ summary: 'Retrieves all the sessions that given user is in.' })
  @Post('user/sessions')
  async getUserSessions(@Body() body: dto.UserSessions): Promise<dto.RegisteredUser | HttpException> {
    const user = await this.userService.getUserSessions(body);
    if(user) return user;
    throw new HttpException('Forbidden.', HttpStatus.BAD_REQUEST);
  }

  @ApiOperation({ summary: 'Retrieves a list of all the users using pagination.' })
  @Post('users')
  async getUsers(@Body() body: dto.Users): Promise<dto.User[]> {
    return await this.userService.getUsers(body);
  }

  @ApiOperation({ summary: 'Delete an user from the database.' })
  @Delete('user/delete')
  async deleteUser(@Body() body: dto.DeleteUser): Promise<dto.RegisteredUser | HttpException> {
    const user = await this.userService.deleteUser(body);
    if(user) return user;
    throw new HttpException('Forbidden.', HttpStatus.BAD_REQUEST);
  }
}
