import { Controller, Get, Post, Put, Delete, Body, Query } from '@nestjs/common';
import { CreateUserDTO } from './dto/user-create.dto';
import { UserService } from './user.service';
import { ReadUserDTO } from './dto/user-read.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDTO } from './dto/user-update.dto';
import { Role } from 'src/app.enums';
import { DeleteUserDTO } from './dto/user-delete.dto';

@Controller('simulation')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('user')
  createUser(@Body() dto: CreateUserDTO): JSON {
    return this.userService.createUser(dto);
  }

  @Get('user')
  readUser(@Query() dto: ReadUserDTO): JSON {
    return this.userService.readUser(dto);
  }

  @Put('user')
  updateUser(@Body() dto: UpdateUserDTO): JSON {
    if(typeof(dto.role) === "string"){ dto.role = Role[dto.role]}
    return this.userService.updateUser(dto);
  }

  @Delete('user')
  deleteUser(@Query() dto: DeleteUserDTO): string {
    return this.userService.deleteUser(dto);
  }
}
