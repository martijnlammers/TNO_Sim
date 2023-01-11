import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class Users {
  @ApiProperty({
    required: true,
    description: 'Quantity of users in the list that are skipped. Number in string literal, can not be float.',
    example: "0",
    type: String,
  })
  skip: string;

  @ApiProperty({
    required: true,
    description: 'Quantity of users per page. Number in string literal, can not be float.',
    example: "5",
    type: String,
  })
  take: string;

  @ApiPropertyOptional({
    required: false,
    description: 'The role of all the users in the list.',
    example: "Trainee",
    default: 'Trainee',
    type: String,
    enum: ['Trainee', 'Supervisor']
})
  role: 'Trainee' | 'Supervisor';
}

export class User {
  id: string
  fullname: string
  role: number
}

