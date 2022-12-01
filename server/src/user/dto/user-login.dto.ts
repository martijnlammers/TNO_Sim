import { ApiProperty } from '@nestjs/swagger';
import { IsAscii, IsNotEmpty, IsOptional, IsEmail } from 'class-validator';
export class CheckLoginDTO {
    @ApiProperty({
        example:"m.ashton@gmail.com"
    })
    @IsEmail()
    email?: string;

    @ApiProperty({
        example:"markashton123"
    })
    @IsAscii()
    password?: string;
}


