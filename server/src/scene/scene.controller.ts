import { Controller, Get, Post, Put, Delete, Body, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReadSceneDTO } from './dto/scene-read.dto';
import { CreateSceneDTO } from './dto/scene-create.dto';
import { UpdateSceneDTO } from './dto/scene-update.dto';
import { DeleteSceneDTO } from './dto/scene-delete.dto';
import { SceneService } from './scene.service';

@Controller('simulation')
@ApiTags('Scene')
export class SceneController {
  constructor(private readonly sceneService: SceneService) {}

  @Post('scene')
  createScene(@Body() dto: CreateSceneDTO): JSON {
    return this.sceneService.createScene(dto);
  }

  @Get('scene')
  readScene(@Query() dto: ReadSceneDTO): JSON {
    return this.sceneService.readScene(dto);
  }

  @Put('scene')
  updateScene(@Body() dto: UpdateSceneDTO): JSON {
    return this.sceneService.updateScene(dto);
  }

  @Delete('scene')
  deleteScene(@Query() dto: DeleteSceneDTO): string {
    return this.sceneService.deleteScene(dto);
  }
}
