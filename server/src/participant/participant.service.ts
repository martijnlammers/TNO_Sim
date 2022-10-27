import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AddParticipantDTO } from './dto/participant-add.dto';
import { DeleteParticipantDTO } from './dto/participant-delete.dto';

const prisma = new PrismaClient();

@Injectable()
export class ParticipantService {
  addParticipant(dto: AddParticipantDTO): any {
    return prisma.sessionParticipants.create({
      data: {
        sessionId: dto.sessionId,
        userId: dto.userId,
      },
    });
  }
  deleteParticipant(dto: DeleteParticipantDTO): any {
    return prisma.sessionParticipants.delete({
      where: {
        sessionId_userId: {
          sessionId: dto.sessionId,
          userId: dto.userId,
        },
      },
    });
  }
}
