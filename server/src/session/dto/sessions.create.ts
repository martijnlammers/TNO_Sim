import { ApiProperty } from "@nestjs/swagger";

export class CreateSession {
    @ApiProperty({
        required: true,
        description: 'Scene Id of the scene that needs to be added to the session.',
        example: "6ad9b170-91c8-11ed-a1eb-0242ac120002",
        type: String,
    })
    sceneId: string;

    @ApiProperty({
        required: true,
        description: "UserId of the user with the 'Supervisor' role.",
        example: "4b01d922-91c8-11ed-a1eb-0242ac120002",
        type: String
    })
    userId_supervisor: string;

    @ApiProperty({
        required: true,
        description: "UserId of the first user with the 'Trainee' role.",
        example: "343bec32-91c8-11ed-a1eb-0242ac120002",
        type: String
    })
    userId_trainee1: string;

    @ApiProperty({
        required: true,
        description: "UserId of the second user with the 'Trainee' role.",
        example: "1bc82382-91c8-11ed-a1eb-0242ac120002",
        type: String
    })
    userId_trainee2: string;

    @ApiProperty({
        required: true,
        description: 'Session description',
        example: "Training session to elaborate the importance of looking under the couch.",
        type: String
    })
    description: string;
}

export class Session { 

}