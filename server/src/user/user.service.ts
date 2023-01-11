import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Role } from 'src/app.enums';
import { createHash } from 'crypto';
import * as dto from './dto/all';
const prisma = new PrismaClient();

@Injectable()
export class UserService {

  async registerUser(body: dto.Register): Promise<dto.RegisteredUser | null> {
    try {
      return await prisma.user.create({
        data: {
          fullname: body.fullname,
          email: createHash('sha256').update(body.email).digest('hex'),
          password: createHash('sha256').update(body.password).digest('hex'),
          role: Role[body?.role]
        }
      });
    } catch (e) {
      return null;
    }
  }

  async loginUser(body: dto.Login): Promise<dto.RegisteredUser | null> {
    try {
      return await prisma.user.findFirst({
        where: {
          email: createHash('sha256').update(body.email).digest('hex'),
          password: createHash('sha256').update(body.password).digest('hex'),
        }
      });
    } catch (e) {
      return null;
    }
  }

  async getUsers(body: dto.Users): Promise<dto.User[]> {
    if (body?.role) {
      return await prisma.user.findMany({
        where: {
          role: Role[body.role]
        },
        select: {
          id: true,
          fullname: true,
          role: true
        },
        skip: parseInt(body.skip),
        take: parseInt(body.take)
      })
    }
    return await prisma.user.findMany({
      skip: parseInt(body.skip),
      take: parseInt(body.take)
    })
  }

  async deleteUser(body: dto.DeleteUser): Promise<dto.RegisteredUser | null> {
    try {
      return await prisma.user.delete({ where: { id: body.userId } });
    } catch (e) {
      return null
    }
  }

  async getUserSessions(body: dto.UserSessions): Promise<any | null> {
    try {
      return await prisma.session.findMany({
        orderBy: {
          startTime: "desc"
        },
        where: {
          participants: {
            some: {
              userId: body.userId
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
        skip: parseInt(body.skip),
        take: parseInt(body.take)
      });
    } catch (e) {
      return null
    }
  }
}