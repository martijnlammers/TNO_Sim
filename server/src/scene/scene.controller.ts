import { Controller, Get, Post, Put, Delete, Body, Query, StreamableFile, Header } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReadSceneDTO } from './dto/scene-read.dto';
import { CreateSceneDTO } from './dto/scene-create.dto';
import { UpdateSceneDTO } from './dto/scene-update.dto';
import { DeleteSceneDTO } from './dto/scene-delete.dto';
import { SceneService } from './scene.service';
import { GetMapDTO } from './dto/map-get.dto';
import { createReadStream } from 'fs';
import { join } from 'path';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

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
  @Get('map')
  @Header('content-type', 'image/png')
  async getMapImage(@Query() dto: GetMapDTO): Promise<any> {
    const scene: any = await prisma.scene.findUnique({where:{id:dto.id}})
    return new StreamableFile(createReadStream(join(process.cwd(), '../mapImages/' + String(scene.mapImage))));
  }
}
