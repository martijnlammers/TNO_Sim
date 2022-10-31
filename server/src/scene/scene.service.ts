import { Injectable, StreamableFile } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ReadSceneDTO } from './dto/scene-read.dto';
import { CreateSceneDTO } from './dto/scene-create.dto';
import { UpdateSceneDTO } from './dto/scene-update.dto';
import { DeleteSceneDTO } from './dto/scene-delete.dto';
import { GetMapDTO } from './dto/map-get.dto';
const prisma = new PrismaClient();

@Injectable()
export class SceneService {
  createScene(data: CreateSceneDTO): any {
    return prisma.scene.create({ data });
  }

  readScene(dto: ReadSceneDTO): any {
    return !!dto.id
      ? prisma.scene.findUnique({ where: { id: String(dto.id) }, include:{
          evidences:{
            select:{
              id:true,
              x:true,
              y:true,
              z:true,
              type:true
            }
          }
      } })
      : prisma.scene.findMany();
  }

  updateScene(dto: UpdateSceneDTO): any {
    return prisma.scene.update({
      where: {
        id: dto.id,
      },
      data: dto,
    });
  }

  deleteScene(dto: DeleteSceneDTO): any {
    return prisma.scene.delete({ where: { id: dto.id } });
  }
}
