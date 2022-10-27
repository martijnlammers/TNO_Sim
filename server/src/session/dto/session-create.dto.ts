import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsAlphanumeric, IsAscii, IsNotEmpty, IsOptional, IsUUID, Length } from "class-validator";



export class CreateSessionDTO {
    @ApiPropertyOptional()
    @IsAscii()
    @IsOptional()
    @Length(0, 280)
    description?: string;

    @ApiProperty({
        example:"valid scene uuid"
    })
    @IsNotEmpty()
    @IsUUID("all")
    sceneId: string;
}
