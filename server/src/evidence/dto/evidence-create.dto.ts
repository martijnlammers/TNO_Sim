import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsUUID } from 'class-validator';
import { EvidenceType } from './../../app.enums'
export class CreateEvidenceDTO {
  @ApiProperty({
    example: 5.5,
  })
  @IsNumber()
  @IsNotEmpty()
  x: number;

  @ApiProperty({
    example: 0.512,
  })
  @IsNumber()
  @IsNotEmpty()
  y: number;

  @ApiProperty({
    example: 3.3,
  })
  @IsNumber()
  @IsNotEmpty()
  z: number;

  @ApiProperty({
    example:"Blood",
  })
  @IsNotEmpty()
  @IsEnum(EvidenceType)
  type: string;

  @ApiProperty({
    example:"9952e745-45e9-4248-83b7-ef4f6e37b6f7",
  })
  @IsNotEmpty()
  @IsUUID("all")
  sceneId: string;
}
