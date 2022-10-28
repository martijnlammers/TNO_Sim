import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsUUID } from 'class-validator';
import { EvidenceType } from './../../app.enums'
export class CreateEvidenceDTO {
  @ApiProperty({
    example: 5.5,
    description:"x position in simulation, float"
  })
  @IsNumber()
  @IsNotEmpty()
  x: number;

  @ApiProperty({
    example: 0.512,
    description:"y position in simulation, float"
  })
  @IsNumber()
  @IsNotEmpty()
  y: number;

  @ApiProperty({
    example: 3.3,
    description:"z position in simulation, float"
  })
  @IsNumber()
  @IsNotEmpty()
  z: number;
  @ApiProperty({
    example:"Blood",
    description:"current enum: 'Gunpowder' = 0, 'Sperm' = 1, 'Saliva' = 2, 'Blood' = 3, 'Fibers' = 4, 'Fingerprint' = 5"
  })
  @IsNotEmpty()
  @IsEnum(EvidenceType)
  type: string;

  @ApiProperty({
    example:"9952e745-45e9-4248-83b7-ef4f6e37b6f7",
    description: 'has to be valid scene uuid'
  })
  @IsNotEmpty()
  @IsUUID("all")
  sceneId: string;
}
