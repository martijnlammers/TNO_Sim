import { Controller, Delete, Body, Get, Post, Query } from '@nestjs/common';
import { ApiProperty, ApiTags, ApiOperation } from '@nestjs/swagger';
import { Session } from 'src/session/dto/sessions';
import { UnityService } from './unity.service';
import * as dto from './dto/all'
import { Scene } from 'src/scene/dto/scene';
import { Evidence } from 'src/scene/dto/scene.evidence';


class PutScene {
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
  async append(@Body() body: dto.SessionId): Promise<string | null> {
    const session: Session[] = await this.unityService.getUserSession(body);
    return await session[0]?.id;
  }

  @Post('/putScene')
  async putScene(@Body() body: dto.PutScene): Promise<string | null> {
    const scene: Scene = await this.unityService.putScene(body);
    return await scene?.id;
  }

  @Post('/putEvidence')
  async putEvidence(@Body() body: dto.PutEvidence): Promise<string | null> {
    const evidence: Evidence = await this.unityService.putEvidence(body);
    return await evidence?.id;
  }
}
