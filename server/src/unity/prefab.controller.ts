import { Controller, Delete, Body, Get, Post, Query } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { VerboseSession } from 'src/session/dto/session';
import { UnityService } from './unity.service';


@Controller('/unity')
@ApiTags('Unity')
export class UnityController {

  constructor(private readonly unityService: UnityService) {}

  @Post('/user/latestSessionId')
  async append(@Body() body: {id:string}) {
    const session: VerboseSession = await this.unityService.getUserSession(body);
    return session.id;
  }
}
