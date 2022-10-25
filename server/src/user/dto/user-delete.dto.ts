import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
export class DeleteUserDTO {
  @ApiProperty({
    example: '6275d1f9-f95c-43a3-a8fe-8c9cf91d0622',
  })
  @IsUUID("all")
  id: string;
}
