import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsUUID, IsNotEmpty, IsOptional, Length, IsDateString } from "class-validator";
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export class UpdateSessionDTO{
    @ApiProperty({
        example:"valid session id"
    })
    @IsNotEmpty()
    @IsUUID("all")
    id: string;

    @ApiPropertyOptional({
        example:"arbitrary description"
    })
    @IsOptional()
    @Length(0, 280)
    description?: string;
    
    @IsDateString()
    @ApiPropertyOptional({
        example: new Date().toISOString()
    })
    @IsOptional()
    startTime?: string;

    @IsDateString()
    @ApiPropertyOptional({
        example: new Date().toISOString()
    })
    @IsOptional()
    stopTime?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsUUID("all")
    sceneId?: string;
}