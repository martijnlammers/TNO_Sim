import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateEvidenceDTO } from './dto/evidence-create.dto';
import { EvidenceType } from 'src/app.enums';
import { DeleteEvidenceDTO } from './dto/evidence-delete.dto';
const prisma = new PrismaClient();
@Injectable()
export class EvidenceService {
  createEvidence(dto: CreateEvidenceDTO): any {
    return prisma.evidence.create({
      data: {
        x: dto.x,
        y: dto.y,
        z: dto.z,
        type: parseInt(EvidenceType[dto.type]),
        sceneId: dto.sceneId,
      },
    });
  }

  deleteEvidence(dto: DeleteEvidenceDTO): any {
    return prisma.evidence.delete({ where: { id: dto.evidenceId } });
  }
}
