import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class Login {
    @ApiProperty({
        required: true,
        description: 'Email to check for login.',
        example: "fruitEnjoyer@gmail.com",
        type: String,
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        required: true,
        description: 'Password to check for login.',
        example: "Banana123",
        type: String,
    })
    password: string;
}