import { Controller, Get, Post, Put, Delete, Body, Query } from '@nestjs/common';
import { SessionService } from './session.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('/')
@ApiTags('Session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  // @Post('session/create')
  // create(@Query() dto: ReadSessionDTO): string {
  //   return this.sessionService.readSession(dto);
  // }

  // @Post('session/event')
  // event(@Query() dto: ReadSessionDTO): string {
  //   return this.sessionService.readSession(dto);
  // }

  // @Post('sessions/filter/user')
  // filterByUser(@Query() dto: ReadSessionDTO): string {
  //   return this.sessionService.readSession(dto);
  // }

  // @Delete('session')
  // deleteSession(@Query() dto: DeleteSessionDTO): string {
  //   return this.sessionService.readSession(dto);
  // }
}
