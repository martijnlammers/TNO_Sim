import { ApiProperty } from '@nestjs/swagger';

export class DeleteUser {
    @ApiProperty({
        required: true,
        description: 'UserID attached to registered account that needs to be deleted.',
        example: "Peaches445",
        type: String,
    })
    userId: string;
}