import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Role } from 'src/app.enums';
import { createHash } from 'crypto';
import { ReadSessionsPageDTO } from 'src/session/dto/session-page.dto';
import * as dto from './dto/all';
interface Error {
  error: string
}
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
        }
      });
    } catch (e) {
      return null;
    }
  }

  async loginUser(body: any): Promise<dto.RegisteredUser | null> {
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

  async readUsers(body: dto.Users): Promise<dto.UsersPage> {
    if (body?.role) {
      return await prisma.user.findMany({
        where: {
          role: Role[body.role]
        },
        select:{
          id:true,
          fullname:true,
          role:true
        },
        skip: body.skip,
        take: body.take,
      })
    }
    return await prisma.user.findMany({ skip: body.skip, take: body.take })
  }

  async deleteUser(body: dto.Delete): Promise<dto.RegisteredUser | null> {
    try{
      return await prisma.user.delete({ where: { id: body.userId } });
    } catch(e){
      return null
    }
  }
}