import { ApiProperty } from "@nestjs/swagger";

export class Delete {
    @ApiProperty({
        required: true,
        description: 'Scene ID of the scene needing to be deleted.',
        example: "8daf50f2-6ba8-49f7-bc8c-7413fd536cc7",
        type: String
    })
    sceneId: string;
}


export class DeleteEvidence {
    @ApiProperty({
        required: true,
        description: 'Evidence ID of the evidence needing to be deleted.',
        example: "c56510fb-946c-4728-a6ea-7e72b6fee4de",
        type: String
    })
    evidenceId: string;
}