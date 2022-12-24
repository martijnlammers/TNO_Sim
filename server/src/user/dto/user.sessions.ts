import { ApiProperty } from "@nestjs/swagger";

export class UserSessions {
    @ApiProperty()
    userId: string;

    @ApiProperty()
    skip: number;

    @ApiProperty()
    take: number;
}
