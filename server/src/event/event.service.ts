import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
@Injectable()
export class EventService {
  createEvent(data): any {
    return prisma.event.create({data});
  }
}
