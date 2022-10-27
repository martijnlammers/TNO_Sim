import { Controller, Get, Post, Put, Delete, Body, Query } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { EvidenceService } from './evidence.service';
import { CreateEvidenceDTO } from './dto/evidence-create.dto'
import { DeleteEvidenceDTO } from './dto/evidence-delete.dto';
@Controller('simulation')
@ApiTags('Scene evidences')
export class EvidenceController {
  constructor(private readonly evidenceService: EvidenceService) {}

  @Post('evidence')
  createEvidence(@Body() dto: CreateEvidenceDTO): string {
    return this.evidenceService.createEvidence(dto);
  }

  @Delete('evidence')
  deleteEvidence(@Query() dto: DeleteEvidenceDTO): string {
    return this.evidenceService.deleteEvidence(dto);
  }
}
