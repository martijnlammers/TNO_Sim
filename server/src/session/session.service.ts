import { Injectable } from '@nestjs/common';
import { CreateSessionDTO } from './dto/session-create.dto';
import { PrismaClient } from '@prisma/client';
import { UpdateSessionDTO } from './dto/session-update.dto';
import { ReadSessionDTO } from './dto/session-read.dto';
import { DeleteSessionDTO } from './dto/session-delete.dto';
const prisma = new PrismaClient()

@Injectable()
export class SessionService {
  createSession(data: CreateSessionDTO): any {
    return prisma.session.create({data});
  }
  readSession(dto: ReadSessionDTO): any {
    return !!dto.sessionId
      ? prisma.session.findUnique({ 
        where: { 
          id: String(dto.sessionId) 
        }
        })
      : prisma.session.findMany();
  }
  updateSession(dto: UpdateSessionDTO): any {
    return prisma.session.update({
      where:{
        id:dto.id
      },
      data:dto
    });
  }
  deleteSession(dto: DeleteSessionDTO): any {
    return prisma.session.delete({
      where:{
        id:dto.sessionId
      }
    });
  }
}
