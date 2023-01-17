import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class PutEvidence {
    @ApiPropertyOptional({
        required: false,
        description: 'Give a custom ID to the evidence. Leave blank for generated UUID.',
        example: "SomeRandomEvidenceID",
        default: '6c1250d2-91c4-11ed-a1eb-0242ac120002',
        type: String,
    })
    id?: string;

    @ApiProperty({
        required: true,
        description: 'The sceneId you want to add the evidence to.',
        example: "8daf50f2-6ba8-49f7-bc8c-7413fd536cc7",
        type: String
    })
    sceneId: string;

    @ApiProperty({
        required: true,
        description: 'The type of the evidence. Check the schema for possible options.',
        example: "Saliva",
        type: String,
        enum: ['salvia', 'blood', 'gunPowder', 'sperm', 'fibers', 'fingerPrints', 'fingerPrintsDeveloped']
    })
    type: 'salvia' | 'blood' | 'gunPowder' | 'sperm' | 'fibers' | 'fingerPrints' | 'fingerPrintsDeveloped';

    @ApiProperty({
        required: true,
        description: 'X coordinate of evidence.',
        example: "1.023",
        type: String,
    })
    x: string;

    @ApiProperty({
        required: true,
        description: 'Y coordinate of evidence.',
        example: "0.02332",
        type: String,
    })
    y: string;

    @ApiProperty({
        required: true,
        description: 'Z coordinate of evidence.',
        example: "13.023",
        type: String,
    })
    z: string;
}
