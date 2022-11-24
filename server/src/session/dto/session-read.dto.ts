import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsUUID, IsOptional } from "class-validator";


export class ReadSessionDTO{
    @ApiPropertyOptional({
        example:"0f7ce1e2-1535-43ae-b499-d95bf85159cc",
        description: 'has to be valid session uuid, can be left empty to fetch all the sessions'
    })
    @IsOptional()
    @IsUUID("all")
    sessionId: string;
}