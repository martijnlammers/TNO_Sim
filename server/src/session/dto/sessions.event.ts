import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class AddEvent {
    @ApiProperty()
    sessionId: string;

    @ApiProperty()
    action: string;

    @ApiProperty()
    userId: string;

    @ApiPropertyOptional()
    evidenceId?: string;

    @ApiPropertyOptional()
    relevance?: string;

    @ApiPropertyOptional()
    light?: string;

    @ApiPropertyOptional()
    filter?: string;
}

export class Event {
    id: string
    action: number
    timeStamp: string
    userId: string
    sessionId: string
    evidenceId?: any
    light?: any
    filter?: any
}