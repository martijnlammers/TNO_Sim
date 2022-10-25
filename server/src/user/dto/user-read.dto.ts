import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsOptional } from 'class-validator';
export class ReadUserDTO {
  @ApiPropertyOptional({
    example: '6275d1f9-f95c-43a3-a8fe-8c9cf91d0622',
  })
  @IsUUID("all")
  @IsOptional()
  id?: string;
}