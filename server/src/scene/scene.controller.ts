import { Controller, Get, Post, Put, Delete, Body, Query, StreamableFile, Header } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReadSceneDTO } from './dto/scene-read.dto';
import { PutSceneDTO } from './dto/scene-put.dto';
import { DeleteSceneDTO } from './dto/scene-delete.dto';
import { SceneService } from './scene.service';
@Controller('simulation')
@ApiTags('Scene')
export class SceneController {
  constructor(private readonly sceneService: SceneService) {}

  @Get('scene')
  readScene(@Query() dto: ReadSceneDTO): JSON {
    return this.sceneService.readScene(dto);
  }

  @Put('scene')
  updateScene(@Body() dto: PutSceneDTO): JSON {
    return this.sceneService.updateScene(dto);
  }

  @Delete('scene')
  deleteScene(@Query() dto: DeleteSceneDTO): string {
    return this.sceneService.deleteScene(dto);
  }
}
