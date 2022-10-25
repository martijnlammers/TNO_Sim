import { ApiProperty } from '@nestjs/swagger';
export class DeleteSceneDTO {
  @ApiProperty({
    example: '9952e745-45e9-4248-83b7-ef4f6e37b6f7',
  })
  id: string;
}
