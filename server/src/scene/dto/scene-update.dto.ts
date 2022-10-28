import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsAscii, IsUUID, Length, IsNumber, IsOptional } from 'class-validator';
export class UpdateSceneDTO {
  @ApiProperty({
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

  @ApiPropertyOptional({
    example:"base64 encoded image",
    description: 'name of image you want to fetch'
  })
  @IsAscii()
  @IsOptional()
  mapImage?: string;

  @IsNumber()
  @ApiPropertyOptional({
    example:70.72,
    description: 'image rescale for width in dashboard, float'
  })
  @IsOptional()
  scaleX?: number;

  @ApiProperty({
    required: false,
    example: 2914.909,
    description: 'image rescale for height in dashboard, float'
  })
  @IsNumber()
  @IsOptional()
  scaleY?: number;
}