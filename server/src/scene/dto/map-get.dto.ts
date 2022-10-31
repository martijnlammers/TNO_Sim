import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
export class GetMapDTO {
  @ApiProperty({
    example: '9952e745-45e9-4248-83b7-ef4f6e37b6f7',
    description: 'has to be valid scene uuid'
  })
  @IsUUID("all")
  id: string;
}
