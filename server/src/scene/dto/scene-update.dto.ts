import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsAscii, IsUUID, Length, IsNumber, IsOptional } from 'class-validator';
export class UpdateSceneDTO {
  @ApiProperty({
    example: '9952e745-45e9-4248-83b7-ef4f6e37b6f7',
  })
  @IsNotEmpty()
  @IsUUID("all")
  id: string;

  @ApiPropertyOptional({
    example: "new name"
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

  @ApiPropertyOptional({
    example:"base64 encoded image"
  })
  @IsAscii()
  @IsOptional()
  mapImage?: string;

  @IsNumber()
  @ApiPropertyOptional({
    example:70.72
  })
  @IsOptional()
  scaleX?: number;

  @ApiProperty({
    required: false,
    example: 2914.909
  })
  @IsNumber()
  @IsOptional()
  scaleY?: number;
}