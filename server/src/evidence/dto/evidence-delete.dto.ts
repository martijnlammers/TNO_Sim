import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
export class DeleteEvidenceDTO {
  @ApiProperty({
    example:"60bddbf7-a6c9-4d2f-a409-8904befeb491"
  })
  @IsNotEmpty()
  @IsUUID('all')
  evidenceId: string;
}
