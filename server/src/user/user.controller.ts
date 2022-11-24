import { Controller, Get, Post, Put, Delete, Body, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { ReadUserDTO } from './dto/user-read.dto';
import { ApiTags } from '@nestjs/swagger';
import { PutUserDTO } from './dto/user-put.dto';
import { Role } from 'src/app.enums';
import { DeleteUserDTO } from './dto/user-delete.dto';

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
}
