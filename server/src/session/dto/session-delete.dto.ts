import { ApiProperty } from "@nestjs/swagger";
import { IsUUID, IsNotEmpty } from "class-validator";


export class DeleteSessionDTO{
    @ApiProperty({
        example:"valid session uuid"
    })
    @IsNotEmpty()
    @IsUUID("all")
    sessionId: string;
}