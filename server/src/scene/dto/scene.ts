import { ApiProperty } from '@nestjs/swagger';
import { Evidence } from './scene.evidence';

export class CreateScene {
    @ApiProperty({
        required: true,
        description: 'Name of the scene map',
        example: "Cabin",
        type: String,
    })
    map_name: string;

    @ApiProperty({
        required: true,
        description: 'Description of the scene.',
        example: "A broken home, with a mystery.",
        type: String
    })
    description: string;
}



export class Scene {
    id: string
    map_name: string
    description: string
    evidences?: Evidence[]
}
