import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class ReqFilterByRole {
    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    password: string;
}


export class ResFilterByRole{

    
}

