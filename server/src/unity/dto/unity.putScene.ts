
import { ApiProperty } from "@nestjs/swagger";
export class PutScene {
    @ApiProperty({
        required: true,
        description: 'Registered userId.',
        example: "Peaches445",
        type: String
    })
    id: string;
    @ApiProperty({
        required: true,
        example: "Forrest cabin",
        type: String
    })
    map_name: string;
    @ApiProperty({
        required: true,
        example: "Something descriptive",
        type: String
    })
    description: string;
}
