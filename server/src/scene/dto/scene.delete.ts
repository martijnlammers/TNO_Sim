import { ApiProperty } from "@nestjs/swagger";

export class Delete {
    @ApiProperty()
    sceneId: string;
}


export class DeleteEvidence {
    @ApiProperty()
    evidenceId: string;
}