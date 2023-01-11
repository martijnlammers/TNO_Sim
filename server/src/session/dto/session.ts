import { ApiProperty } from "@nestjs/swagger";

export class DeleteSession {
    @ApiProperty({
        required: true,
        description: 'SessionId of the sessions needing to be deleted.',
        example: "d5216c22-91c7-11ed-a1eb-0242ac120002",
        type: String
    })
    sessionId: string;
}

export class GetSession {
    @ApiProperty({
        required: true,
        description: 'SessionId of the session that needs to be retrieved.',
        example: "d5216c22-91c7-11ed-a1eb-0242ac120002",
        type: String
    })
    sessionId: string;
}


export class VerboseSession {
    id: string
    sceneId: string
    description: string
    startTime?: any
    stopTime?: any
    events?: {
        id: string
        action: number
        timeStamp: any
        userId: string
        sessionId: string
        evidenceId: any
        light: any
        filter: any
    }[]
    scene?: {
        map_name: string
        description: string
        evidences?: {
            id: string
            type: number
            x: number
            y: number
            z: number
        }[]
    }
    participants?: {
        user: {
            id: string
            fullname: string
            role: number
        }
    }[]
}



