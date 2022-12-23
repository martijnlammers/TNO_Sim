import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsAscii, Length, IsEnum, IsAlpha, IsEmail } from 'class-validator';
// import { Role } from '../../app.enums'
export class User {
    skip: number;
    take: number;
    role?: string;
}


