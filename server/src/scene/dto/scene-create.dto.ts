import { ApiProperty } from '@nestjs/swagger';
export class CreateSceneDTO {
  @ApiProperty({
    example: 'Demo scene',
  })
  name: string;
  @ApiProperty({
    example: 'Demo scene for prototyping.',
  })
  description: string;
  @ApiProperty({
    example: 'Image encoded to Base64',
  })
  mapImage: string;
  @ApiProperty({
    example: 70.72,
  })
  scaleX: number;
  @ApiProperty({
    example: 2914.909,
  })
  scaleY: number;
}
