import { ApiProperty } from "@nestjs/swagger";

export class AddEvent {
    @ApiProperty()
    sessionId: string;
}

