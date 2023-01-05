import { ApiProperty } from "@nestjs/swagger";

export class UserSessions {
    @ApiProperty()
    userId: string;

    @ApiProperty()
    skip: string;

    @ApiProperty()
    take: string;
}
