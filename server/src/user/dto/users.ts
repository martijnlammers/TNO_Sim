import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Role } from 'src/app.enums';
// const enum Role {
//     Trainee = "Trainee",
//     Supervisor = "Supervisor"
// }

export class Users {
    @ApiProperty()
    skip: number;

    @ApiProperty()
    take: number;

    @ApiPropertyOptional()
    role: 'Trainee' | 'Supervisor';
}

export class UsersPage{


}

