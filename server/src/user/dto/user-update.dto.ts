import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsAscii, Length, IsEnum, IsAlpha, IsNotEmpty, IsOptional, IsEmail, IsUUID } from 'class-validator';
import { Role } from './../../app.enums'
export class UpdateUserDTO {
    @ApiProperty({
        example:"6275d1f9-f95c-43a3-a8fe-8c9cf91d0622"
    })
    @IsUUID()
    @IsNotEmpty()
    id: string;

    @ApiPropertyOptional({
        example:"Mark"
    })
    @IsAlpha()
    @IsNotEmpty()
    @Length(2, 30)
    @IsOptional()
    firstname?: string;

    @ApiPropertyOptional({
        example:"Ashton"
    })
    @IsAlpha()
    @IsNotEmpty()
    @Length(2, 30)
    @IsOptional()
    lastname?: string;

    @ApiPropertyOptional({
        example:null
    })
    @IsAlpha()
    @IsOptional()
    @Length(2, 30)
    addition?: string;

    @ApiPropertyOptional({
        example:"m.ashton@gmail.com"
    })
    @IsEmail()
    @IsNotEmpty()
    @IsOptional()
    email?: string;

    @ApiPropertyOptional({
        example:"markashton123"
    })
    @IsAscii()
    @IsNotEmpty()
    @IsOptional()
    password?: string;

    @ApiPropertyOptional({
        example:"Trainee"
    })
    @IsNotEmpty()
    @IsEnum(Role)
    @IsOptional()
    role?: string | number;
}


