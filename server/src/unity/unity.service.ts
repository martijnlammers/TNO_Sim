import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Evidence, Role } from 'src/app.enums';
import { createHash } from 'crypto';
import * as dto from './dto/all'
const prisma = new PrismaClient();
@Injectable()
export class UnityService {
  async getUserSession(body: dto.SessionId): Promise<any | null> {
    try {
      return await prisma.session.findMany({
        orderBy: {
          startTime: "desc"
        },
        where: {
          participants: {
            some: {
              userId: body.id
            }
          }
        },
        select: {
          sceneId: true,
          description: true,
          id: true,
          startTime: true,
          stopTime: true,
          participants: {
            select: {
              user: {
                select: {
                  fullname: true,
                  role: true,
                }
              }
            }
          },
        },
        skip: 0,
        take: 1
      });
    } catch (e) {
      return null
    }
  }

  async putScene(body: dto.PutScene): Promise<any | null> {
    try {
      return await prisma.scene.upsert({
        where: { id: body.id },
        update: {},
        create: {
          id: body.id,
          description: body.description,
          map_name: body.map_name
        },
      })

    } catch (e) {
      return null;
    }
  }

  async putEvidence(body: dto.PutEvidence): Promise<any | null> {
    try {
      return await prisma.evidence.upsert({
        where: { id: body.id},
        update: {},
        create: {
          id: body?.id,
          sceneId: body.sceneId,
          type: Evidence[body.type],
          x: parseFloat(body.x),
          y: parseFloat(body.y),
          z: parseFloat(body.z)
        },
      })

    } catch (e) {
      return null;
    }
  }
}