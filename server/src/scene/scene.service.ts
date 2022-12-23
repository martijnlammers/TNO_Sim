import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ReadSceneDTO } from './dto/scene-read.dto';
import { PutSceneDTO } from './dto/scene-put.dto';
import { DeleteSceneDTO } from './dto/scene-delete.dto';
const prisma = new PrismaClient();

@Injectable()
export class SceneService {
  readScene(dto): any {
    return;
    // return !!dto.id
    //   ? prisma.scene.findUnique({
    //       where: { id: String(dto.id) },
    //       include: {
    //         evidences: {
    //           select: {
    //             id: true,
    //             x: true,
    //             y: true,
    //             z: true,
    //             type: true,
    //           },
    //         },
    //       },
    //     })
    //   : prisma.scene.findMany();
  }

  // updateScene(dto: PutSceneDTO): any {

  //   // Updates record, creates if doesnt exist.
  //   return prisma.scene.upsert({
  //     where: {
  //       id: dto.id,
  //     },
  //     update: {
  //       name: dto.name,
  //       description: dto.description
  //     },
  //     create: {
  //       id: dto.id,
  //       name: dto.name,
  //       description: dto.description
  //     },
  //   });
  // }

  // deleteScene(dto: DeleteSceneDTO): any {
  //   return prisma.scene.delete({ where: { id: dto.id } });
  // }
}
