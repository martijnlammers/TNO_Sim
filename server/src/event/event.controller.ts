import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateEventDTO } from './event-create.dto';
import { EventService } from './event.service';

@Controller('simulation')
@ApiTags('Session events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post('event')
  createEvent(@Body() dto: CreateEventDTO): string {
    return this.eventService.createEvent();
  }
}
