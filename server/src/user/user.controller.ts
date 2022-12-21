import { Controller, Get, Post, Put, Delete, Body, Query, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { ReadSupervisorsDTO, ReadTraineesDTO, ReadUserDTO } from './dto/user-read.dto';
import { ApiTags } from '@nestjs/swagger';
import { PutUserDTO } from './dto/user-put.dto';
import { DeleteUserDTO } from './dto/user-delete.dto';
import { CheckLoginDTO } from './dto/user-login.dto';
import { CreateUserDTO } from './dto/user-create.dto';

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
  updateUser(@Body() dto: PutUserDTO): JSON {
    return this.userService.updateUser(dto);
  }

  @Delete('user')
  deleteUser(@Query() dto: DeleteUserDTO): string {
    return this.userService.deleteUser(dto);
  }

  @Post('user/login')
  async checkLogin(@Body() dto: CheckLoginDTO): Promise<JSON> {
    const user: any = await this.userService.checkLogin(dto);
    console.log(user)
    if(!user){
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return user;
  }

  @Get('user/trainees')
  getTrainees(@Query() dto: ReadTraineesDTO): JSON {
    return this.userService.getTrainees(dto);
  }

  @Get('user/supervisors')
  getSupervisors(@Query() dto: ReadSupervisorsDTO): JSON {
    return this.userService.getSupervisors(dto);
  }
}
