import { ApiProperty } from "@nestjs/swagger";

export class Evidence {
    id?: string;

    @ApiProperty()
    sceneId: string;

    @ApiProperty()
    type: 'Saliva' | 'Blood' | 'Gunpowder';

    @ApiProperty()
    x: number;

    @ApiProperty()
    y: number;

    @ApiProperty()
    z: number;
}

// export class AddedEvidence {
//     export interface Root {
//         id: string
//         x: number
//         y: number
//         z: number
//         type: number
//         sceneId: string
//       }
      
// }