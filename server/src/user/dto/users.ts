import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class Users {
    @ApiProperty()
    skip: string;

    @ApiProperty()
    take: string;

    @ApiPropertyOptional()
    role: 'Trainee' | 'Supervisor';
}

export class User {
  id: string
  fullname: string
  role: number
}

