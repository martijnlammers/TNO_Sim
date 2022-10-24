import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AppService } from '../services/database.service';

@Controller('simulation')
export class UserController {
  constructor(private readonly appService: AppService) {}

  @Post('user')
  createUser(): string {
    return this.appService.getHello();
  }

  @Get('user')
  getUser(): string {
    return this.appService.getHello();
  }

  @Put('user')
  updateUser(): string {
    return this.appService.getHello();
  }

  @Delete('user')
  deleteUser(): string {
    return this.appService.getHello();
  }
}
