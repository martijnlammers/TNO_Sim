import { Controller, Post, Delete, Body, HttpException, HttpStatus } from '@nestjs/common';
import { SessionService } from './session.service';
import { ApiTags } from '@nestjs/swagger';
import * as dto from './dto/all';

@Controller('/')
@ApiTags('Session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post('session/create')
  async create(@Body() body: dto.CreateSession): Promise<dto.Session | HttpException> {
    const session = await this.sessionService.create(body);
    if(session) return session;
    throw new HttpException('Could not make session. Check all the IDs.', HttpStatus.BAD_REQUEST);
  }

  @Post('session/event')
  addEvent(@Body() body: dto.AddEvent): Promise<Event | HttpException> {
    const event = this.sessionService.addEvent(body);
    if(event){
      console.log(event);
      return event;
    } 
    throw new HttpException('Something went wrong.', HttpStatus.BAD_REQUEST);
  }

  @Post('sessions')
  getSessions(@Body() body: dto.Sessions): Promise<dto.Session[]> {
    return this.sessionService.getSessions(body);
  }

  @Post('sessions/single')
  async getSession(@Body() body: dto.GetSession): Promise<dto.VerboseSession | HttpStatus.BAD_REQUEST> {
    const session: dto.VerboseSession = await this.sessionService.getSession(body);
    if(session) return session;
    throw new HttpException('Session not found.', HttpStatus.BAD_REQUEST);
  }

  @Delete('session/delete')
  async deleteSession(@Body() body: dto.DeleteSession): Promise<any | HttpStatus.BAD_REQUEST> {
    const session = await this.sessionService.deleteSession(body);
    if(session) return session;
    throw new HttpException('Session does not exist.', HttpStatus.BAD_REQUEST);
  }
}
