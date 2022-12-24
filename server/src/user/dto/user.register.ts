import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class Register {
    @ApiProperty()
    fullname: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    password: string;
}


export class RegisteredUser {
    id: string
    fullname: string
    email: string
    password: string
    role: number
}

