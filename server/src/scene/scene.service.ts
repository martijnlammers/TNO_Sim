import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { GetSceneDTO } from './dto/scene-get.dto';
import { CreateSceneDTO } from './dto/scene-create.dto';
import { UpdateSceneDTO } from './dto/scene-update.dto';
import { DeleteSceneDTO } from './dto/scene-delete.dto';
const prisma = new PrismaClient();

@Injectable()
export class SceneService {
  createScene(data: CreateSceneDTO): any {
    return prisma.scene.create({ data });
  }

  getScene(dto: GetSceneDTO): any {
    return !!dto.id
      ? prisma.scene.findUnique({ where: { id: String(dto.id) } })
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
