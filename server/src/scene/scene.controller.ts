import { Controller, Get, Post, Put, Delete, Body, Query } from '@nestjs/common';
import { CreateSceneDTO, ReturnCreatedSceneDTO, GetSceneDTO } from './scene.dto';
import { SceneService } from './scene.service';

@Controller('simulation')
export class SceneController {
  constructor(private readonly sceneService: SceneService) {}

  @Post('scene')
  createScene(@Body() dto: CreateSceneDTO): ReturnCreatedSceneDTO {
    return this.sceneService.createScene(dto);
  }

  @Get('scene')
  getScene(@Query() dto: GetSceneDTO): string {
    return this.sceneService.getScene(dto);
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
