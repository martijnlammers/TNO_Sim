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
    @ApiProperty()
    id: string
    
    @ApiProperty()
    fullname: string
    
    @ApiProperty()
    email: string
    
    @ApiProperty()
    password: string

    @ApiProperty()
    role: number
}

