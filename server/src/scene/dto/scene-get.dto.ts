import { ApiPropertyOptional } from '@nestjs/swagger';
export class GetSceneDTO {
  @ApiPropertyOptional({
    example: '9952e745-45e9-4248-83b7-ef4f6e37b6f7',
  })
  id?: string;
}