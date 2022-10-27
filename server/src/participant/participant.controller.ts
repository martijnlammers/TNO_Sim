import { Controller, Get, Post, Put, Delete, Body, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddParticipantDTO } from './dto/participant-add.dto';
import { DeleteParticipantDTO } from './dto/participant-delete.dto';
import { ParticipantService } from './participant.service';

@Controller('simulation')
@ApiTags('Participant')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Post('participant')
  
  addParticipant(@Body() dto: AddParticipantDTO): JSON {
    return this.participantService.addParticipant(dto);
  }

  @Delete('participant')
  deleteParticipant(@Body() dto: DeleteParticipantDTO): string {
    return this.participantService.deleteParticipant(dto);
  }
}
