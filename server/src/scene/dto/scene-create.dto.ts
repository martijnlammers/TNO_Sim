import { ApiProperty } from '@nestjs/swagger';
import { IsAscii, Length, IsNumber } from 'class-validator';
export class CreateSceneDTO {
  @ApiProperty({
    example: 'Demo scene',
    description: 'scene name'
  })
  @IsAscii()
  @Length(0, 50)
  name: string;

  @ApiProperty({
    example: 'Demo scene for prototyping.',
    description: 'arbitrary string for context'
  })
  @IsAscii()
  @Length(0, 280)
  description: string;

  @ApiProperty({
    example: 'demo.png',
    description: 'name of image you want to fetch'
  })
  @IsAscii()
  mapImage: string;

  @ApiProperty({
    example: 70.72,
    description: 'image rescale for width in dashboard, float'
  })
  @IsNumber()
  scaleX: number;

  @ApiProperty({
    example: 2914.909,
    description: 'image rescale for height in dashboard, float'
  })
  @IsNumber()
  scaleY: number;
}
