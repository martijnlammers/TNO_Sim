import { ApiProperty } from '@nestjs/swagger';
export class GetScene {
    @ApiProperty({
        required: true,
        description: 'The sceneId you want to retrieve with verbose information.',
        example: "8daf50f2-6ba8-49f7-bc8c-7413fd536cc7",
        type: String
    })
    sceneId: string;
}