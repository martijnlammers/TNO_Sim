import { ApiProperty } from "@nestjs/swagger";

export class Evidence {
    id?: string;

    @ApiProperty()
    sceneId: string;

    @ApiProperty()
    type: 'Saliva' | 'Blood' | 'Gunpowder' | 'Sperm' | 'Fiber' | 'Fingerprint';

    @ApiProperty()
    x: number;

    @ApiProperty()
    y: number;

    @ApiProperty()
    z: number;
}
