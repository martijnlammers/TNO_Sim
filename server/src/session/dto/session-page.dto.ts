import { ApiProperty } from "@nestjs/swagger";
import { IsUUID, IsNotEmpty, IsNumber, IsPositive } from "class-validator";


export class ReadSessionsPageDTO{
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID("all")
    userId: string;

    @ApiProperty()
    @IsNotEmpty()
    skip: string;

    @ApiProperty()
    @IsNotEmpty()
    take: string;
}