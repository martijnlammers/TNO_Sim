import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsOptional, IsUUID } from "class-validator";
import { Action, Filter, Light } from "src/app.enums";

export class CreateEventDTO{
    @ApiProperty({
        example:"PickedUp"
    })
    @IsEnum(Action)
    @IsNotEmpty()
    action: number | string;

    @ApiProperty({
        example:"6275d1f9-f95c-43a3-a8fe-8c9cf91d0622"
    })
    @IsUUID()
    @IsNotEmpty()
    userId: string;

    @ApiProperty({
        example:"b9fa129b-3461-4363-b06b-f3a9a8f098bf"
    })
    @IsUUID()
    @IsNotEmpty()
    sessionId: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsUUID()
    evidenceId?: string;
    
    @ApiPropertyOptional({
        example:"Violet"
    })
    @IsEnum(Light)
    @IsOptional()
    light?: number | string; 

    @ApiPropertyOptional({
        example:"Glasses435nm"
    })
    @IsEnum(Filter)
    @IsOptional()
    filter?: number | string;
}
