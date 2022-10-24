import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AppService } from '../services/database.service';

@Controller('simulation')
export class SessionController {
  constructor(private readonly appService: AppService) {}

  @Post('session')
  createSession(): string {
    return this.appService.getHello();
  }
  
  @Get('session')
  getSession(): string {
    return this.appService.getHello();
  }

  @Put('session')
  updateSession(): string {
    return this.appService.getHello();
  }

  @Delete('session')
  deleteSession(): string {
    return this.appService.getHello();
  }
}
