import { ApiProperty } from '@nestjs/swagger';

export class Delete {
    @ApiProperty()
    userId: string;
}