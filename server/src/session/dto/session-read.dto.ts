import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsUUID, IsOptional } from "class-validator";


export class ReadSessionDTO{
    @ApiPropertyOptional({
        example:"valid session uuid",
        description: 'has to be valid session uuid, can be left empty to fetch all the sessions'
    })
    @IsOptional()
    @IsUUID("all")
    sessionId: string;
}