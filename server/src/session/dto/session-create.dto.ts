import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsAlphanumeric, IsAscii, IsNotEmpty, IsOptional, IsUUID, Length } from "class-validator";



export class CreateSessionDTO {
    @ApiPropertyOptional()
    @IsAscii()
    @IsOptional()
    @Length(0, 280)
    description?: string;

    @ApiProperty({
        example:"9952e745-45e9-4248-83b7-ef4f6e37b6f7",
        description:"has to be valid scene uuid"
    })
    @IsNotEmpty()
    @IsUUID("all")
    sceneId: string;
}
