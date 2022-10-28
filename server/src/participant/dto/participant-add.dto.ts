import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsAscii,
  IsNotEmpty,
  IsOptional,
  IsUUID,
  Length,
} from 'class-validator';

export class AddParticipantDTO {
  @ApiProperty({
    example: '86507480-1842-426b-ab3c-fa87765c9990',
    description: "Has to be a valid session uuid"
  })
  @IsNotEmpty()
  sessionId: string;
  @ApiProperty({
    example: '6275d1f9-f95c-43a3-a8fe-8c9cf91d0622'
    description: "Has to be a valid user uuid"
  })
  @IsNotEmpty()
  userId: string;
}
