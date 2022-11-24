import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
export class DeleteSceneDTO {
  @ApiProperty()
  @IsNotEmpty()
  id: string;
}
