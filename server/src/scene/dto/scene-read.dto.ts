import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsOptional } from 'class-validator';
export class ReadSceneDTO {
  @ApiPropertyOptional({
    example: '9952e745-45e9-4248-83b7-ef4f6e37b6f7',
    description: 'has to be valid scene uuid, can be left empty to fetch all scenes'
  })
  @IsUUID("all")
  @IsOptional()
  id?: string;
}