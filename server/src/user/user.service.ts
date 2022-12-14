import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Role } from 'src/app.enums';
import { ReadUserDTO } from './dto/user-read.dto';
import { DeleteUserDTO } from './dto/user-delete.dto';
import { PutUserDTO } from './dto/user-put.dto';
import { createHash } from 'crypto';
import { CheckLoginDTO } from './dto/user-login.dto';
import { CreateUserDTO } from './dto/user-create.dto';

const prisma = new PrismaClient();
@Injectable()
export class UserService {
  readUser(dto: ReadUserDTO): any {
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

  updateUser(dto: PutUserDTO): any {
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
      }
    });
  }

  createUser(dto: CreateUserDTO): any {
    return prisma.user.create({
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

  deleteUser(dto: DeleteUserDTO): any {
    return prisma.user.delete({ where: { id: dto.id } });
  }

  checkLogin(dto: CheckLoginDTO): any {
    return prisma.user.findFirst({
      where: {
        email: createHash('sha256').update(dto.email).digest('hex'),
        password: createHash('sha256').update(dto.password).digest('hex'),
      },
    });
  }
}
