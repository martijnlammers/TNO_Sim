import { Controller, Post, Delete, Body, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SceneService } from './scene.service';
import * as dto from './dto/all';
@Controller('/')
@ApiTags('Scene')
export class SceneController {
  constructor(private readonly sceneService: SceneService) {}

  @Post('scene')
  async createScene(@Body() body: dto.CreateScene): Promise<dto.Scene | HttpException> {
    const scene: dto.Scene = await this.sceneService.createScene(body);
    if(scene) return scene;
    throw new HttpException('Scene could not be created.', HttpStatus.BAD_REQUEST);
  }

  @Post('scene/evidence')
  async addEvidence(@Body() body: dto.Evidence): Promise<dto.Evidence | null> {
    const evidence = await this.sceneService.addEvidence(body);
    if(evidence) return evidence;
    throw new HttpException('Could not add evidence. Check the scene ID or evidence type.', HttpStatus.BAD_REQUEST);
  }

  @Post('scenes')
  async getScenes(@Body() body: dto.Scenes ): Promise<dto.Scene[] | null> {
    return await this.sceneService.getScenes(body);
  }

  @Post('scenes/single')
  async getScene(@Body() body: dto.GetScene ): Promise<dto.Scene | null> {
    return this.sceneService.getScene(body);
  }

  @Delete('scene/delete')
  async deleteScene(@Body() body: dto.Delete): Promise<dto.Scene | HttpException> {
    const scene: dto.Scene = await this.sceneService.deleteScene(body);
    if(scene) return scene;
    throw new HttpException('Scene does not exist.', HttpStatus.BAD_REQUEST);
  }
}
