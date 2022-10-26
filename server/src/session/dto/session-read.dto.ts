import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsUUID, IsOptional } from "class-validator";


export class ReadSessionDTO{
    @ApiPropertyOptional()
    @IsOptional()
    @IsUUID("all")
    sessionId: string;
}