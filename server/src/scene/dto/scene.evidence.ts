import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class Evidence {
    @ApiPropertyOptional()
    id?: string;

    @ApiProperty()
    sceneId: string;

    @ApiProperty()
    type: 'Saliva' | 'Blood' | 'Gunpowder' | 'Sperm' | 'Fiber' | 'Fingerprint';

    @ApiProperty()
    x: string;

    @ApiProperty()
    y: string;

    @ApiProperty()
    z: string;
}
