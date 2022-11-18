import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsUUID, IsNotEmpty, IsOptional, Length, IsDateString } from "class-validator";
export class UpdateSessionDTO{
    @ApiProperty({
        example:"valid session id",
        description: 'has to be valid session uuid'
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
        example: new Date().toISOString(),
        description: 'has to be an ISO standardized time format'
    })
    @IsOptional()
    stopTime?: string;

    @ApiPropertyOptional({
        description: 'has to be valid scene uuid'
    })
    @IsOptional()
    @IsUUID("all")
    sceneId?: string;
}