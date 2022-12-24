import { ApiProperty } from "@nestjs/swagger";
import { IsUUID, IsOptional } from "class-validator";


export class CreateSession {
    @ApiProperty()
    sessionId: string;
}

