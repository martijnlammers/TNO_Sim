import { ApiProperty } from "@nestjs/swagger";
import { IsUUID, IsNotEmpty, IsOptional } from "class-validator";


export class DeleteSessionDTO{
    @ApiProperty({
        example:"valid session uuid",
        description: 'has to be valid session uuid'
    })
    @IsUUID("all")
    @IsOptional()
    sessionId: string;
}