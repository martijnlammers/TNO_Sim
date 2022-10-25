import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class UpdateSceneDTO {
  @ApiProperty({
    example: '9952e745-45e9-4248-83b7-ef4f6e37b6f7',
  })
  id: string;
  @ApiPropertyOptional({
    example: "new name"
  })
  name?: string;
  @ApiPropertyOptional({
    example: "some arbitrary description"
  })
  description?: string;
  @ApiPropertyOptional()
  mapImage?: string;
  @ApiPropertyOptional()
  scaleX?: number;
  @ApiPropertyOptional()
  scaleY?: number;
}