import { ApiProperty } from "@nestjs/swagger";
import { IsUUID, IsNotEmpty } from "class-validator";


export class DeleteSessionDTO{
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID("all")
    sessionId: string;
}