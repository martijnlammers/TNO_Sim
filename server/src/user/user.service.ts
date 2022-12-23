import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Role } from 'src/app.enums';
import { createHash } from 'crypto';
import { ReadSessionsPageDTO } from 'src/session/dto/session-page.dto';
import * as dto from './dto/all';

const prisma = new PrismaClient();
@Injectable()
export class UserService {
  readUser(dto): any {
    return !!dto.id
      ? prisma.user.findUnique({
          where: {
            id: dto.id,
          },
          select: {
            id: true,
            firstname: true,
            addition: true,
            lastname: true,
            role: true,
          },
        })
      : prisma.user.findMany({
          select: {
            id: true,
            firstname: true,
            addition: true,
            lastname: true,
            role: true,
          },
        });
  }

  updateUser(dto): any {
    console.log('digest: ');
    return prisma.user.update({
      where: {
        id: dto.id,
      },
      data: {
        firstname: dto.firstname,
        lastname: dto.lastname,
        addition: dto.addition,
        email: createHash('sha256').update(dto.email).digest('hex'),
        password: createHash('sha256').update(dto.password).digest('hex'),
        role: parseInt(Role[dto.role]),
      },
    });
  }

  createUser(dto): any {
    // return prisma.user.create({
    //   data: {
    //     firstname: dto.firstname,
    //     lastname: dto.lastname,
    //     addition: dto.addition,
    //     email: createHash('sha256').update(dto.email).digest('hex'),
    //     password: createHash('sha256').update(dto.password).digest('hex'),
    //     role: parseInt(Role[dto.role]),
    //   },
    // });
  }

  // deleteUser(dto): any {
  //   return prisma.user.delete({ where: { id: dto.email } });
  // }

  checkLogin(dto): any {
    return prisma.user.findFirst({
      where: {
        email: createHash('sha256').update(dto.email).digest('hex'),
        password: createHash('sha256').update(dto.password).digest('hex'),
      },
    });
  }

  getSupervisors(dto): any {
    return prisma.user.findMany({
      skip: parseInt(dto.skip),
      take: parseInt(dto.take),
      select: {
        id: true,
        firstname: true,
        lastname: true,
        role: true,
        addition: true,
      },
      where: {
        AND: [{ deleted: false }, { role: Role.Supervisor }],
      },
    });
  }

  getTrainees(dto): any {
    return prisma.user.findMany({
      skip: parseInt(dto.skip),
      take: parseInt(dto.take),
      select: {
        id: true,
        firstname: true,
        lastname: true,
        role: true,
        addition: true,
      },
      where: {
        AND: [{ deleted: false }, { role: Role.Trainee }],
      },
    });
  }

  getSessionsPage(dto: ReadSessionsPageDTO): any {
    return prisma.session.findMany({
      skip: parseInt(dto.skip),
      take: parseInt(dto.take),
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
      where: {
        AND: [
          { deleted: false },
          { participants: { some: { userId: dto.userId } } },
        ],
      },
    });
  }
  registerUser(body: dto.ReqRegister): dto.ResRegister {
    return;
  }

  loginUser(body: dto.ReqLogin): dto.ResLogin {
    const user = prisma.user.findFirst({
      where: {
        email: createHash('sha256').update(body.email).digest('hex'),
        password: createHash('sha256').update(body.password).digest('hex'),
      }
    });
    console.log(user);
    return;
  }

  readAllUsers(body: dto.ReqUsers): dto.ResUsers {
    return;
  }

  filterUsersByRole(body: dto.ReqFilterByRole): dto.ResFilterByRole {
    return;
  }

  deleteUser(body: dto.ReqDelete): dto.ResDelete {
    return;
  }
}
