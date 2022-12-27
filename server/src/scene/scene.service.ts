import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Evidence } from 'src/app.enums';
import * as dto from './dto/all';
const prisma = new PrismaClient();

@Injectable()
export class SceneService {

  async createScene(body: dto.CreateScene): Promise<dto.Scene | null> {
    return await prisma.scene.create({
      data: {
        map_name: body.map_name,
        description: body.description
      }
    })
  }

  async addEvidence(body: dto.Evidence): Promise<any | null> {
    if(Evidence[body.type] === undefined) return null;
    try {
      return prisma.evidence.create({
        data: {
          x: body.x,
          y: body.y,
          z: body.z,
          type: Evidence[body.type],
          sceneId: body.sceneId,
        },
      });
    } catch(e){
      return null;
    }
  }

  async getScene(body: dto.GetScene): Promise<any> {
    return await prisma.scene.findUnique({
      where: { id: body.sceneId },
      include: {
        evidences: {
          select: {
            id: true,
            x: true,
            y: true,
            z: true,
            type: true,
          },
        },
      },
    })
  }

  async getScenes(body: dto.Scenes): Promise<dto.Scene[]> {
    return await prisma.scene.findMany({
      select: {
        id: true,
        map_name: true,
        description: true
      },
      take: body.take,
      skip: body.skip
    })
  }

  async deleteScene(body: dto.Delete): Promise<any | null> {
    try {
      return await prisma.scene.delete({ where: { id: body.sceneId } });
    } catch (e) {
      return null
    }
  }

  async deleteEvidence(body: dto.DeleteEvidence): Promise<any | null> {
    try {
      return await prisma.evidence.delete({ where: { id: body.evidenceId } });
    } catch (e) {
      return null
    }
  }
}