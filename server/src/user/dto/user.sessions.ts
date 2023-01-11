import { ApiProperty } from "@nestjs/swagger";

export class UserSessions {
    @ApiProperty({
        required: true,
        description: 'UserId that you want to retrieve the sessions from.',
        example: "Peaches445",
        type: String,
    })
    userId: string;

    @ApiProperty({
        required: true,
        description: 'Quantity of sessions in the list that are skipped.  Number in string literal, can not be float.',
        example: "0",
        type: String,
    })
    skip: string;

    @ApiProperty({
        required: true,
        description: 'Quantity of sessions per page. Number in string literal, can not be float.',
        example: "5",
        type: String,
    })
    take: string;
}
