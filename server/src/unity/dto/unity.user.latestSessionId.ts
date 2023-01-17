
import { ApiProperty } from "@nestjs/swagger";
export class SessionId {
    @ApiProperty({
        required: true,
        description: 'Registered userId.',
        example: "Peaches445",
        type: String,
    })
    id: string;
}