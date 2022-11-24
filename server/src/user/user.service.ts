import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDTO } from './dto/user-create.dto';
import { Role } from 'src/app.enums';
import { ReadUserDTO } from './dto/user-read.dto';
import { DeleteUserDTO } from './dto/user-delete.dto';
import { PutUserDTO } from './dto/user-put.dto';

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

    // Updates record, creates if doesnt exist.
    return prisma.user.upsert({
      where: {
        id: dto.id,
      },
      update: {
        firstname: dto.firstname,
        lastname: dto.lastname,
        addition: dto.addition,
        email: dto.email,
        password: dto.password,
        role: parseInt(Role[dto.role]),
      },
      create: {
        id: dto.id,
        firstname: dto.firstname,
        lastname: dto.lastname,
        addition: dto.addition,
        email: dto.email,
        password: dto.password,
        role: parseInt(Role[dto.role])
      },
    });
  }

  deleteUser(dto: DeleteUserDTO): any {
    return prisma.user.delete({ where: { id: dto.id } });
  }
}
