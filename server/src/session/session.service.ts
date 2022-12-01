import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PutSessionDTO } from './dto/session-put.dto';
import { ReadSessionDTO } from './dto/session-read.dto';
import { DeleteSessionDTO } from './dto/session-delete.dto';
import { ReadSessionsPageDTO } from './dto/session-page.dto';
const prisma = new PrismaClient();
const date = new Date()

@Injectable()
export class SessionService {
  readSession(dto: ReadSessionDTO): any {
    return !!dto.sessionId
      ? prisma.session.findMany({
          where: {
            id: String(dto.sessionId),
            deleted: false
          },
          include: {
            participants: {
              select: {
                userId: true,
              },
            },
            scene: {
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
            },
            events: true,
          },
        })
      : prisma.session.findMany({
          include: {
            participants: {
              include: {
                user: {
                  select: {
                    firstname: true,
                    lastname: true,
                    role: true,
                    addition: true,
                  },
                },
              },
            },
          },
        });
  }
  updateSession(dto: PutSessionDTO): any {
    return prisma.session.upsert({
      where: {
        id: dto.id,
      },
      update: {
        description: dto.description,
        startTime: dto.startTime,
        stopTime: dto.stopTime,
        sceneId: dto.sceneId ? dto.sceneId : null,
        startSceneTime: dto.startSceneTime,
        stopSceneTime: dto.stopSceneTime,
        lastmodified: date.toISOString()
      },
      create: {
        description: dto.description,
        startTime: dto.startTime,
        stopTime: dto.stopTime,
        sceneId: dto.sceneId ? dto.sceneId : null,
        startSceneTime: dto.startSceneTime,
        stopSceneTime: dto.stopSceneTime,
        lastmodified: date.toISOString()
      },
    });
  }
  deleteSession(dto: DeleteSessionDTO): any {
    const deletedEvents = prisma.event.updateMany({
      where: {sessionId: dto.sessionId},
      data: {
        deleted: true,
        lastmodified: date.toISOString()
      }
    });
    const deletedSession = prisma.session.update({
      where: {id: dto.sessionId},
      data: {
        deleted: true,
        lastmodified: date.toISOString()
      }
    });
    return prisma.$transaction([deletedEvents, deletedSession]);
  }


  getSessionsPage(dto: ReadSessionsPageDTO): any {
    return prisma.session.findMany({
      skip: parseInt(dto.skip),
      take: parseInt(dto.take),
      include:{
        participants: true
      },
      where:{
        deleted: false,
        participants:{
          some:{
            userId: dto.userId
          }
        }
      }
    });
  }
}
