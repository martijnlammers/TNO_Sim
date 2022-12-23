import { ApiProperty } from "@nestjs/swagger";
import { IsUUID, IsNotEmpty, IsNumber, IsPositive, IsOptional } from "class-validator";


export class ReadSessionsPageDTO{
    @ApiProperty()
    @IsUUID("all")
    userId: string;

    @ApiProperty()
    @IsOptional()
    skip: string;

    @ApiProperty()
    @IsOptional()
    take: string;
}