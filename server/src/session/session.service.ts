import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Role, Action, Light, Filter, Relevance } from 'src/app.enums';
import { User } from 'src/user/dto/users';
const prisma = new PrismaClient();
const date = new Date();
import * as dto from './dto/all'

@Injectable()
export class SessionService {

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

    await this.addParticipantToSession(session.id, supervisor.id);
    await this.addParticipantToSession(session.id, participant1.id);
    await this.addParticipantToSession(session.id, participant2.id);
    return prisma.session.findUnique({
      where: {
        id: session.id
      },
      select: {
        id: true,
        description: true,
        participants: {
          select: {
            userId: true
          }
        }
      }
    })
  }

  async addEvent(body: dto.AddEvent): Promise<any | null> {
    console.log(body);
    try {
      return await prisma.event.create({
        data: {
          sessionId: body.sessionId,
          action: Action[body.action],
          userId: body.userId,
          evidenceId: body?.evidenceId,
          relevance: Relevance[body?.relevance],
          light: Light[body?.light],
          filter: Filter[body?.filter]
        }
      })
    } catch (e) {
      return null;
    }
  }

  async deleteSession(body: dto.DeleteSession): Promise<any | null> {
    try {
      return await prisma.session.delete({ where: { id: body.sessionId } });
    } catch (e) {
      return null
    }
  }

  async getSessions(body: dto.Sessions): Promise<any> {
    return await prisma.session.findMany({
      skip: parseInt(body.skip),
      take: parseInt(body.take),
    })
  }

  async getSession(body: dto.GetSession): Promise<dto.VerboseSession> {
    return await prisma.session.findUnique({
      where: {
        id: body.sessionId
      },
      include: {
        events: {
          include:{
            user:{
              select:{
                fullname:true
              }
            }
          }
        },
        scene: {
          select: {
            map_name: true,
            description: true,
            evidences: {
              select: {
                id: true,
                type: true,
                x: true,
                y: true,
                z: true,
              }
            }
          }
        },
        participants: {
          select: {
            user: {
              select: {
                id: true,
                fullname: true,
                role: true
              }
            }
          },
        },
      },
    })
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
    try {
      await prisma.sessionParticipants.create({
        data: {
          sessionId: sessionId,
          userId: userId,
        },
      })
    } catch (e) {
      return null;
    }
  }
}