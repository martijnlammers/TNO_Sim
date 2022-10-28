import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
import { CreateEventDTO } from './event-create.dto';
const prisma = new PrismaClient()
@Injectable()
export class EventService {
  createEvent(data): any {
    // TODO
    return prisma.event.create({data});
  }
}
