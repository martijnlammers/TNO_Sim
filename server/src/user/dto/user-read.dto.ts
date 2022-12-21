import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsOptional } from 'class-validator';
export class ReadUserDTO {
  @ApiPropertyOptional({
    example: '6275d1f9-f95c-43a3-a8fe-8c9cf91d0622',
    description:
      'has to be valid user uuid, can be left empty to fetch all users',
  })
  id?: string;
}

export class ReadSupervisorsDTO {
  @ApiProperty()
  @IsOptional()
  skip: string;

  @ApiProperty()
  @IsOptional()
  take: string;
}

export class ReadTraineesDTO {
  @ApiProperty()
  @IsOptional()
  skip: string;

  @ApiProperty()
  @IsOptional()
  take: string;
}
