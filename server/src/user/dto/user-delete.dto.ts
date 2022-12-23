import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
export class DeleteUserDTO {
  email: string;
}
