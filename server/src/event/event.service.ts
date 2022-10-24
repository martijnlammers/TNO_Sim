import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
@Injectable()
export class EventService {
  createEvent(): string {
    // TODO
    return 'Hello World!';
  }
  getEvent(): string {
    // TODO
    return 'Hello World!';
  }
  updateEvent(): string {
    // TODO
    return 'Hello World!';
  }
  deleteEvent(): string {
    // TODO
    return 'Hello World!';
  }
}
