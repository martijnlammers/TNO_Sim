import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsAscii, Length, IsEnum, IsAlpha, IsNotEmpty, IsOptional, IsEmail, IsUUID } from 'class-validator';
import { Role } from '../../app.enums'
export class PutUserDTO {
    @ApiProperty({
        example:"6275d1f9-f95c-43a3-a8fe-8c9cf91d0622"
    })
    @IsUUID()
    id: string;

    @ApiPropertyOptional({
        example:"Mark"
    })
    @IsAlpha()
    @Length(2, 30)
    firstname?: string;

    @ApiPropertyOptional({
        example:"Ashton"
    })
    @IsAlpha()
    @Length(2, 30)
    lastname?: string;

    @ApiPropertyOptional({
        example:null
    })
    @IsAlpha()
    @Length(2, 30)
    addition?: string;

    @ApiPropertyOptional({
        example:"m.ashton@gmail.com"
    })
    @IsEmail()
    email?: string;

    @ApiPropertyOptional({
        example:"markashton123"
    })
    @IsAscii()
    password?: string;

    @ApiPropertyOptional({
        example:"Trainee"
    })
    @IsEnum(Role)
    role?: string | number;
}


