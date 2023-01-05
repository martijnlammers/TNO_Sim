import { Controller, Delete, Body, Get, Post, Query } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Session } from 'src/session/dto/sessions';
import { UnityService } from './unity.service';

class SessionId {
  @ApiProperty()
  id: string;
}
@Controller('/unity')
@ApiTags('Unity')
export class UnityController {

  constructor(private readonly unityService: UnityService) {}

  @Post('/user/latestSessionId')
  async append(@Body() body: SessionId) {
    const session: Session[] = await this.unityService.getUserSession(body);
    return await session[0].id;
  }
}
