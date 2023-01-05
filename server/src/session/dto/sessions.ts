import { ApiProperty } from "@nestjs/swagger";

export class Sessions {
    @ApiProperty({
        example: "0"
    })
    skip: string;

    @ApiProperty({
        example: "5"
    })
    take: string;
}


export class Session {
    id: string
    sceneId: string
    description: string
    startTime: string
    stopTime: any
}



