import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { SessionService } from './session.service';

@Controller('simulation')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post('session')
  createSession(): string {
    return this.sessionService.createSession();
  }
  
  @Get('session')
  getSession(): string {
    return this.sessionService.getSession();
  }

  @Put('session')
  updateSession(): string {
    return this.sessionService.updateSession();
  }

  @Delete('session')
  deleteSession(): string {
    return this.sessionService.deleteSession();
  }
}
