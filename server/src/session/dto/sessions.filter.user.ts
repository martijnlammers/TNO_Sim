import { ApiProperty } from "@nestjs/swagger";

export class GetSessionsByUser {
    @ApiProperty()
    sessionId: string;
}

export class Session { 

}
