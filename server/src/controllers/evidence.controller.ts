import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { EvidenceService } from '../services/evidence.service';

@Controller('simulation')
export class EvidenceController {
  constructor(private readonly evidenceService: EvidenceService) {}

  @Post('evidence')
  createEvent(): string {
    return this.evidenceService.createEvidence();
  }

  @Get('evidence')
  getEvent(): string {
    return this.evidenceService.getEvidence();
  }

  @Put('evidence')
  updateEvent(): string {
    return this.evidenceService.updateEvidence();
  }

  @Delete('evidence')
  deleteEvent(): string {
    return this.evidenceService.deleteEvidence();
  }
}
