import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import {
  ReadSupervisorsDTO,
  ReadTraineesDTO,
  ReadUserDTO,
} from './dto/user-read.dto';

import { UserLogin, UserSessions, User } from './dto/post/all';
import { ApiTags } from '@nestjs/swagger';
import { PutUserDTO } from './dto/user-put.dto';
import { DeleteUserDTO } from './dto/user-delete.dto';
import { CheckLoginDTO } from './dto/user-login.dto';
import { CreateUserDTO } from './dto/user-create.dto';
import { ReadSessionsPageDTO } from 'src/session/dto/session-page.dto';

@Controller('/')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('user/register')
  register(@Body() dto: CreateUserDTO): JSON {
    return this.userService.createUser(dto);
  }

  @Post('user/login')
  login(@Body() dto: CreateUserDTO): JSON {
    return this.userService.createUser(dto);
  }

  @Post('users')
  readAllUsers(@Body() dto: CreateUserDTO): JSON {
    return this.userService.createUser(dto);
  }

  @Post('users/filter/role')
  filterUsersByRole(@Body() dto: CreateUserDTO): JSON {
    return this.userService.createUser(dto);
  }

  @Delete('user/delete')
  delete(@Body() dto: CreateUserDTO): JSON {
    return this.userService.createUser(dto);
  }
}
