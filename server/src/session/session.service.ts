import { Injectable } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';
import { PutSessionDTO } from './dto/session-put.dto';
import { ReadSessionDTO } from './dto/session-read.dto';
import { DeleteSessionDTO } from './dto/session-delete.dto';
import { ReadSessionsPageDTO } from './dto/session-page.dto';
const prisma = new PrismaClient();

@Injectable()
export class SessionService {
  readSession(dto: ReadSessionDTO): any {
    return !!dto.sessionId
      ? prisma.session.findUnique({
          where: {
            id: String(dto.sessionId),
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
        sceneId: dto.sceneId,
      },
      create: {
        description: dto.description,
        startTime: dto.startTime,
        stopTime: dto.stopTime,
        sceneId: dto.sceneId,
      },
    });
  }
  deleteSession(dto: DeleteSessionDTO): any {
    const deletedEvents = prisma.event.deleteMany({
      where: {
        sessionId: dto.sessionId,
      },
    });
    const deletedSession = prisma.session.delete({
      where: {
        id: dto.sessionId,
      },
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
        participants:{
          some:{
            userId: dto.userId
          }
        }
      }
    });
  }
}
