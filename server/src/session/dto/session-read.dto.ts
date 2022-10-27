import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsUUID, IsOptional } from "class-validator";


export class ReadSessionDTO{
    @ApiPropertyOptional({
        example:"valid session uuid"
    })
    @IsOptional()
    @IsUUID("all")
    sessionId: string;
}