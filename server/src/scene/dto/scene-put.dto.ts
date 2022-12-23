import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsAscii, IsUUID, Length, IsOptional } from 'class-validator';
export class PutSceneDTO {
  @ApiPropertyOptional({
    example: '9952e745-45e9-4248-83b7-ef4f6e37b6f7',
    description: 'has to be valid scene uuid'
  })
  @IsNotEmpty()
  @IsUUID("all")
  id: string;

  @ApiPropertyOptional({
    example: "new name",
    description: 'scene name'
  })
  @IsAscii()
  @Length(0, 50)
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    example: "some arbitrary description"
    
  })
  @IsAscii()
  @Length(0, 280)
  @IsOptional()
  description?: string;
}