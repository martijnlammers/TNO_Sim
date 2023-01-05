import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Role } from 'src/app.enums';
import { createHash } from 'crypto';
const prisma = new PrismaClient();


class SessionId {
  id: string;
}

@Injectable()
export class UnityService {


  async getUserSession(body: SessionId): Promise<any | null> {
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
}