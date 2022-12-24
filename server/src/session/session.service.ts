import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Role } from 'src/app.enums';
import { User } from 'src/user/dto/users';
const prisma = new PrismaClient();
const date = new Date();
import * as dto from './dto/all'

@Injectable()
export class SessionService {
  readSession(dto): any {
    // return !!dto.sessionId
    //   ? prisma.session.findFirst({
    //       where: { AND: [{ id: String(dto.sessionId) }, { deleted: false }] },
    //       include: {
    //         participants: {
    //           select: {
    //             userId: true,
    //           },
    //         },
    //         scene: {
    //           include: {
    //             evidences: {
    //               select: {
    //                 id: true,
    //                 x: true,
    //                 y: true,
    //                 z: true,
    //                 type: true,
    //               },
    //             },
    //           },
    //         },
    //         events: true,
    //       },
    //     })
    //   : prisma.session.findMany({
    //       include: {
    //         participants: {
    //           include: {
    //             user: {
    //               select: {
    //                 firstname: true,
    //                 lastname: true,
    //                 role: true,
    //                 addition: true,
    //               },
    //             },
    //           },
    //         },
    //       },
    //     });
    return;
  }
  // updateSession(dto: PutSessionDTO): any {
  //   return prisma.session.upsert({
  //     where: {
  //       id: dto.id,
  //     },
  //     update: {
  //       description: dto.description,
  //       startTime: dto.startTime,
  //       stopTime: dto.stopTime,
  //       sceneId: dto.sceneId ? dto.sceneId : null,
  //       startSceneTime: dto.startSceneTime,
  //       stopSceneTime: dto.stopSceneTime,
  //       lastmodified: date.toISOString(),
  //     },
  //     create: {
  //       description: dto.description,
  //       startTime: dto.startTime,
  //       stopTime: dto.stopTime,
  //       sceneId: dto.sceneId ? dto.sceneId : null,
  //       startSceneTime: dto.startSceneTime,
  //       stopSceneTime: dto.stopSceneTime,
  //       lastmodified: date.toISOString(),
  //     },
  //   });
  // }
  // deleteSession(dto: DeleteSessionDTO): any {
  //   const deletedEvents = prisma.event.updateMany({
  //     where: { sessionId: dto.sessionId },
  //     data: {
  //       deleted: true,
  //       lastmodified: date.toISOString(),
  //     },
  //   });
  //   const deletedSession = prisma.session.update({
  //     where: { id: dto.sessionId },
  //     data: {
  //       deleted: true,
  //       lastmodified: date.toISOString(),
  //     },
  //   });
  //   return prisma.$transaction([deletedEvents, deletedSession]);
  // }
  async create(body: dto.CreateSession): Promise<any | null> {
    const supervisor: User = await this.findUserWithRole(body.userId_supervisor, Role.Supervisor);
    const participant1: User = await this.findUserWithRole(body.userId_trainee1, Role.Trainee);
    const participant2: User = await this.findUserWithRole(body.userId_trainee2, Role.Trainee);
    const scene = await prisma.scene.findUnique({ where: { id: body.sceneId } })

    // Checks if the records to add to the session exist.
    if (!supervisor || !participant1 || !participant2 || !scene) return null;

    const session = await prisma.session.create({
      data: {
        sceneId: body.sceneId,
        description: body.description
      }
    })

    await this.addParticipantToSession(session.id, participant1.id);
    await this.addParticipantToSession(session.id, participant2.id);
    return prisma.session.findUnique({
        where: {
          id: session.id
        },
        select:{
          id:true,
          description:true,
          participants:{
            select:{
              userId:true
            }
          }
        }
      })
  }

  async addEvent(body: dto.AddEvent): Promise<any | null> {
  }

  async filterSessionsByUser(body: dto.GetSessionsByUser): Promise<any | null> {
  }

  async deleteSession(body: dto.Delete): Promise<any | null> {
  }

  async findUserWithRole(userId: string, role: Role): Promise<User | null> {
    const result = await prisma.user.findMany({
      where: {
        AND: [
          { id: userId },
          { role: role }
        ]
      }
    })
    if (result.length === 0) return null;
    return result[0];
  }

  async addParticipantToSession(sessionId: string, userId: string): Promise<void | null> {
    try{
      await prisma.sessionParticipants.create({
        data: {
          sessionId: sessionId,
          userId: userId,
        },
      })
    } catch(e){
      return null;
    }
  }
}
