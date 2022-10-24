import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { SceneService } from '../services/scene.service';

@Controller('simulation')
export class SceneController {
  constructor(private readonly sceneService: SceneService) {}

  @Post('scene')
  createScene(): string {
    return this.sceneService.createScene();
  }

  @Get('scene')
  getScene(): string {
    return this.sceneService.getScene();
  }

  @Put('scene')
  updateScene(): string {
    return this.sceneService.updateScene();
  }

  @Delete('scene')
  deleteScene(): string {
    return this.sceneService.deleteScene();
  }
}
