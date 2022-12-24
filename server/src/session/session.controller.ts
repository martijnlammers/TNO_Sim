import { Controller, Post, Delete, Body, HttpException, HttpStatus } from '@nestjs/common';
import { SessionService } from './session.service';
import { ApiTags } from '@nestjs/swagger';
import * as dto from './dto/all';

@Controller('/')
@ApiTags('Session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post('session/create')
  async create(@Body() dto: dto.CreateSession): Promise<any | HttpException> {
    const session = await this.sessionService.create(dto);
    if(session) return session;
    throw new HttpException('Could not make session. Check all the IDs.', HttpStatus.BAD_REQUEST);

  }

  @Post('session/event')
  addEvent(@Body() dto: dto.AddEvent): Promise<any> {
    return this.sessionService.addEvent(dto);
  }

  @Post('sessions/filter/user')
  filterSessionsByUser(@Body() dto: dto.GetSessionsByUser): Promise<any> {
    return this.sessionService.filterSessionsByUser(dto);
  }

  @Delete('session')
  deleteSession(@Body() dto: dto.Delete): Promise<any> {
    return this.sessionService.deleteSession(dto);
  }
}
