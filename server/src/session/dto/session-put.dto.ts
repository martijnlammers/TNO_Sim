import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsUUID, IsNotEmpty, Length, IsDateString,ValidationOptions, ValidateIf } from "class-validator";
export class PutSessionDTO{
    @ApiPropertyOptional({
        example:"0f7ce1e2-1535-43ae-b499-d95bf85159cc",
        description: 'has to be valid session uuid'
    })
    @IsOptional()
    @IsUUID("all")
    id?: string;

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
    startSceneTime?: string;

    @IsDateString()
    @ApiPropertyOptional({
        example: new Date().toISOString()
    })
    @IsOptional()
    stopSceneTime?: string;

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

    @ApiPropertyOptional()
    @IsOptional()
    ipaddr?: string;

    @ApiPropertyOptional({
        example: false
    })
    @IsOptional()
    deleted?: boolean;
}
export function IsOptional(validationOptions?: ValidationOptions) {
    return ValidateIf((obj, value) => {
        return value !== null && value !== undefined && value !== '';
    }, validationOptions);
}