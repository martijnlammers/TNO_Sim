import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AppService } from '../services/database.service';

@Controller('simulation')
export class EvidenceController {
  constructor(private readonly appService: AppService) {}

  @Post('evidence')
  createEvent(): string {
    return this.appService.getHello();
  }

  @Get('evidence')
  getEvent(): string {
    return this.appService.getHello();
  }

  @Put('evidence')
  updateEvent(): string {
    return this.appService.getHello();
  }

  @Delete('evidence')
  deleteEvent(): string {
    return this.appService.getHello();
  }
}
