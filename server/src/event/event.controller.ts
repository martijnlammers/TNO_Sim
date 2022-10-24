import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('simulation')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post('event')
  createEvent(): string {
    return this.eventService.createEvent();
  }

  @Get('event')
  getEvent(): string {
    return this.eventService.getEvent();
  }

  @Put('event')
  updateEvent(): string {
    return this.eventService.updateEvent();
  }

  @Delete('event')
  deleteEvent(): string {
    return this.eventService.deleteEvent();
  }
}
