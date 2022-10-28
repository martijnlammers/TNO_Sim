import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Action, Filter, Light } from 'src/app.enums';
import { CreateEventDTO } from './event-create.dto';
import { EventService } from './event.service';

@Controller('simulation')
@ApiTags('Session events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post('event')
  createEvent(@Body() dto: CreateEventDTO): string {
    if(typeof(dto.action) === "string"){ dto.action = Action[dto.action]}
    if(typeof(dto.filter) === "string"){ dto.filter = Filter[dto.filter]}
    if(typeof(dto.light) === "string"){ dto.light = Light[dto.light]}
    return this.eventService.createEvent(dto);
  }
}
