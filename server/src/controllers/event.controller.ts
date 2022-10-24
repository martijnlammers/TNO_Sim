import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AppService } from '../services/database.service';

@Controller('simulation')
export class EventController {
  constructor(private readonly appService: AppService) {}

  @Post('event')
  createEvent(): string {
    return this.appService.getHello();
  }

  @Get('event')
  getEvent(): string {
    return this.appService.getHello();
  }

  @Put('event')
  updateEvent(): string {
    return this.appService.getHello();
  }

  @Delete('event')
  deleteEvent(): string {
    return this.appService.getHello();
  }
}
