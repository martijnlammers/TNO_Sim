import { ApiProperty } from '@nestjs/swagger';
export class GetScene {
    @ApiProperty()
    sceneId: string;
}