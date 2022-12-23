import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class ReqRegister {
    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    password: string;
}


export class ResRegister{

    
}

