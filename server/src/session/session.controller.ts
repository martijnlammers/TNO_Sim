import { Controller, Get, Post, Put, Delete, Body, Query } from '@nestjs/common';
import { SessionService } from './session.service';
import { ApiTags } from '@nestjs/swagger';
import { PutSessionDTO } from './dto/session-put.dto';
import { ReadSessionDTO } from './dto/session-read.dto';
import { DeleteSessionDTO } from './dto/session-delete.dto';
import { ReadSessionsPageDTO } from './dto/session-page.dto';

@Controller('simulation')
@ApiTags('Session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Get('session')
  getSession(@Query() dto: ReadSessionDTO): string {
    return this.sessionService.readSession(dto);
  }

  @Put('session')
  updateSession(@Body() dto: PutSessionDTO): JSON {
    return this.sessionService.updateSession(dto);
  }

  @Delete('session')
  deleteSession(@Query() dto: DeleteSessionDTO): string {
    return this.sessionService.deleteSession(dto);
  }
  @Post('session/page')
  getSessionsPage(@Query() dto: ReadSessionsPageDTO): string {
    return this.sessionService.getSessionsPage(dto);
  }
}
