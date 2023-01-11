import { ApiProperty } from '@nestjs/swagger';

export class Scenes {
    @ApiProperty({
        required: true,
        description: 'Quantity of scenes in the list are skipped.  Number in string literal, can not be float.',
        example: "0",
        type: String,
    })
    skip: string;

    @ApiProperty({
        required: true,
        description: 'Quantity of scenes per page. Number in string literal, can not be float.',
        example: "5",
        type: String,
    })
    take: string;
}
