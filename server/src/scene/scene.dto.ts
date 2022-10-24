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

export class ReturnCreatedSceneDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  mapImage: string;
  @ApiProperty()
  scaleX: number;
  @ApiProperty()
  scaleY: number;
}

export class GetSceneDTO {
  @ApiProperty({
    example: "9952e745-45e9-4248-83b7-ef4f6e37b6f7"
  })
  id?: string;
}
