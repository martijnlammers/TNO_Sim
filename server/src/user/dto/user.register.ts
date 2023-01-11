import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class Register {
    @ApiPropertyOptional({
        required: false,
        description: 'UserID for account, leave empty to generate uuid.',
        example: "Peaches445",
        default: '87c48f1e-91a3-11ed-a1eb-0242ac120002',
        type: String,
    })
    id: string;

    @ApiProperty({
        required: true,
        description: 'Fullname for the new account which will be used to identify users on their actions.',
        example: "Post Melon",
        type: String,
    })
    fullname: string;

    @ApiProperty({
        required: true,
        description: 'Email for the new account.',
        example: "fruitEnjoyer@gmail.com",
        type: String,
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        required: true,
        description: 'Password for the new account.',
        example: "Banana123",
        type: String,
    })
    password: string;

    @ApiPropertyOptional({
        required: false,
        description: 'The role of the participant.',
        example: "Trainee",
        default: 'Trainee',
        type: String,
        enum: ['Trainee', 'Supervisor']
    })
    role: 'Trainee' | 'Supervisor';
}



export class RegisteredUser {
    id: string
    fullname: string
    email: string
    password: string
    role: number
}

