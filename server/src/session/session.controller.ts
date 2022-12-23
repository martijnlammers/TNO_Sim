import { Controller, Get, Post, Put, Delete, Body, Query } from '@nestjs/common';
import { SessionService } from './session.service';
import { ApiTags } from '@nestjs/swagger';
import { PutSessionDTO } from './dto/session-put.dto';
import { ReadSessionDTO } from './dto/session-read.dto';
import { DeleteSessionDTO } from './dto/session-delete.dto';
import { ReadSessionsPageDTO } from './dto/session-page.dto';

@Controller('/')
@ApiTags('Session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post('session/create')
  create(@Query() dto: ReadSessionDTO): string {
    return this.sessionService.readSession(dto);
  }

  @Post('session/event')
  event(@Query() dto: ReadSessionDTO): string {
    return this.sessionService.readSession(dto);
  }

  @Post('sessions/filter/user')
  filterByUser(@Query() dto: ReadSessionDTO): string {
    return this.sessionService.readSession(dto);
  }

  @Delete('session')
  deleteSession(@Query() dto: DeleteSessionDTO): string {
    return this.sessionService.deleteSession(dto);
  }
}
