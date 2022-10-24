import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('simulation')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('user')
  createUser(): string {
    return this.userService.createUser();
  }

  @Get('user')
  getUser(): string {
    return this.userService.getUser();
  }

  @Put('user')
  updateUser(): string {
    return this.userService.updateUser();
  }

  @Delete('user')
  deleteUser(): string {
    return this.userService.deleteUser();
  }
}
