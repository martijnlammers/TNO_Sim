import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class Users {
    @ApiProperty()
    skip: number;

    @ApiProperty()
    take: number;

    @ApiPropertyOptional()
    role: 'Trainee' | 'Supervisor';
}

export class User {
  id: string
  fullname: string
  role: number
}

