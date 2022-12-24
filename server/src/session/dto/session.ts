import { ApiProperty } from "@nestjs/swagger";

export class DeleteSession {
    @ApiProperty()
    sessionId: string;
}

export class GetSession {
    @ApiProperty()
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



