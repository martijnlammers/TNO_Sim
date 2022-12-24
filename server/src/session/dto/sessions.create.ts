import { ApiProperty } from "@nestjs/swagger";

export class CreateSession {
    @ApiProperty()
    sceneId: string;

    @ApiProperty()
    userId_supervisor: string;

    @ApiProperty()
    userId_trainee1: string;

    @ApiProperty()
    userId_trainee2: string;

    @ApiProperty()
    description: string;
}

export class Session { 

}