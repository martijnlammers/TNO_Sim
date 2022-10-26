import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsUUID, IsNotEmpty, IsOptional, Length, IsDateString } from "class-validator";


export class UpdateSessionDTO{
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID("all")
    id: string;

    @ApiPropertyOptional()
    @IsOptional()
    @Length(0, 280)
    description?: string;
    
    @IsDateString()
    @ApiPropertyOptional()
    @IsOptional()
    startTime?: string;

    @IsDateString()
    @ApiPropertyOptional()
    @IsOptional()
    stopTime?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsUUID("all")
    sceneId?: string;
}