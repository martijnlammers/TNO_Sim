import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateSceneDTO, GetSceneDTO } from './scene.dto';
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

  updateScene(): string {
    // TODO
    return 'Hello World!';
  }

  deleteScene(): string {
    // TODO
    return 'Hello World!';
  }
}
 