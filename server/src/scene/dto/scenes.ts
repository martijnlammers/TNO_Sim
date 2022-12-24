import { ApiProperty } from '@nestjs/swagger';

export class Scenes {
    @ApiProperty()
    skip: number;

    @ApiProperty()
    take: number;
}
