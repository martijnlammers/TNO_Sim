import { Controller, Delete, Body, Get, Post, Query } from '@nestjs/common';
import { ApiProperty, ApiTags, ApiOperation } from '@nestjs/swagger';
import { Session } from 'src/session/dto/sessions';
import { UnityService } from './unity.service';

class SessionId {
  @ApiProperty({
    required: true,
    description: 'Registered userId.',
    example: "Peaches445",
    type: String,
})
  id: string;
}
@Controller('/unity')
@ApiTags('Unity')
export class UnityController {

  constructor(private readonly unityService: UnityService){}
  @ApiOperation({ summary: 'Fetches the latest session id linked to the given user id in plain text. If this returns nothing, there are no sessions attached to the user.' })
  @Post('/user/latestSessionId')
  async append(@Body() body: SessionId): Promise<string | null> {
    const session: Session[] = await this.unityService.getUserSession(body);
    return await session[0]?.id;
  }
}
