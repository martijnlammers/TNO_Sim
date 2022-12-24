import { ApiProperty } from '@nestjs/swagger';
import { Evidence } from './scene.evidence';

export class CreateScene {
    @ApiProperty()
    map_name: string;

    @ApiProperty()
    description: string;
}



export class Scene {
    id: string
    map_name: string
    description: string
    evidences?: Evidence[]
}
