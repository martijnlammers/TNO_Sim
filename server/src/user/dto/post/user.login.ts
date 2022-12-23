import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class UserLogin {
    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    password: string;
}


