import { Controller, Post, Delete, Body, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { SceneService } from './scene.service';
import * as dto from './dto/all';
@Controller('/')
@ApiTags('Scene')
export class SceneController {
  constructor(private readonly sceneService: SceneService) { }

  @Post('scene')
  @ApiOperation({ summary: 'Creates scene record in database.' })
  async createScene(@Body() body: dto.CreateScene): Promise<dto.Scene | HttpException> {
    const scene: dto.Scene = await this.sceneService.createScene(body);
    if (scene) return scene;
    throw new HttpException('Scene could not be created.', HttpStatus.BAD_REQUEST);
  }

  @Post('scene/evidence')
  @ApiOperation({ summary: 'Adds evidence to registered scene in database.' })
  async addEvidence(@Body() body: dto.Evidence): Promise<dto.Evidence | null> {
    const evidence = await this.sceneService.addEvidence(body);
    if (evidence) return evidence;
    throw new HttpException('Could not add evidence. Check the scene ID or evidence type.', HttpStatus.BAD_REQUEST);
  }

  @Delete('scene/evidence/delete')
  @ApiOperation({ summary: 'Deletes evidence from registered scene in database. All the evidence IDs attached to a scene can be found in the /scenes/single endpoint.' })
  async deleteEvidence(@Body() body: dto.DeleteEvidence): Promise<dto.Evidence | null> {
    const evidence: dto.Evidence = await this.sceneService.deleteEvidence(body);
    if (evidence) return evidence;
    throw new HttpException('Evidence does not exist.', HttpStatus.BAD_REQUEST);
  }

  @Post('scenes')
  @ApiOperation({ summary: 'Retrieves a list of scenes using pagination.' })
  async getScenes(@Body() body: dto.Scenes): Promise<dto.Scene[] | null> {
    return await this.sceneService.getScenes(body);
  }

  @Post('scenes/single')
  @ApiOperation({ summary: 'Retrieves a single scene with verbose information.' })
  async getScene(@Body() body: dto.GetScene): Promise<dto.Scene | null> {
    return this.sceneService.getScene(body);
  }

  @Delete('scene/delete')
  @ApiOperation({ summary: 'Deletes a scene and all attached evidences from the database.' })
  async deleteScene(@Body() body: dto.Delete): Promise<dto.Scene | HttpException> {
    const scene: dto.Scene = await this.sceneService.deleteScene(body);
    if (scene) return scene;
    throw new HttpException('Scene does not exist.', HttpStatus.BAD_REQUEST);
  }
}
