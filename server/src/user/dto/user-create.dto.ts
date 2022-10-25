import { ApiProperty } from '@nestjs/swagger';
import { IsAscii, Length, IsEnum, IsAlpha, IsNotEmpty, IsOptional, IsEmail } from 'class-validator';
import { Role } from './../../app.enums'
export class CreateUserDTO {
    @ApiProperty({
        example:"Mark"
    })
    @IsAlpha()
    @IsNotEmpty()
    @Length(2, 30)
    firstname: string;

    @ApiProperty({
        example:"Ashton"
    })
    @IsAlpha()
    @IsNotEmpty()
    @Length(2, 30)
    lastname: string;

    @ApiProperty({
        example:null
    })
    @IsAlpha()
    @IsOptional()
    @Length(2, 30)
    addition?: string;

    @ApiProperty({
        example:"m.ashton@gmail.com"
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        example:"markashton123"
    })
    @IsAscii()
    @IsNotEmpty()
    password: string;

    @ApiProperty({
        example:"Trainee"
    })
    @IsNotEmpty()
    @IsEnum(Role)
    role: string;
}


