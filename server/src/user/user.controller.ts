import { Controller, Get, Post, Put, Delete, Body, Query, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { ReadUserDTO } from './dto/user-read.dto';
import { ApiTags } from '@nestjs/swagger';
import { PutUserDTO } from './dto/user-put.dto';
import { DeleteUserDTO } from './dto/user-delete.dto';
import { CheckLoginDTO } from './dto/user-login.dto';

@Controller('simulation')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('user')
  readUser(@Query() dto: ReadUserDTO): JSON {
    return this.userService.readUser(dto);
  }

  @Put('user')
  updateUser(@Body() dto: PutUserDTO): JSON {
    return this.userService.updateUser(dto);
  }

  @Delete('user')
  deleteUser(@Query() dto: DeleteUserDTO): string {
    return this.userService.deleteUser(dto);
  }

  @Post('user/login')
  checkLogin(@Body() dto: CheckLoginDTO): JSON {
    const user: any = this.userService.checkLogin(dto);
    console.log(user)
    if(!user){
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return user;

  }
}
