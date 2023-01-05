import { ApiProperty } from '@nestjs/swagger';

export class Scenes {
    @ApiProperty()
    skip: string;

    @ApiProperty()
    take: string;
}
