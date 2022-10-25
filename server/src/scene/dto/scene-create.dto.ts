import { ApiProperty } from '@nestjs/swagger';
import { IsAscii, Length, IsNumber } from 'class-validator';
export class CreateSceneDTO {
  @ApiProperty({
    example: 'Demo scene',
  })
  @IsAscii()
  @Length(0, 50)
  name: string;

  @ApiProperty({
    example: 'Demo scene for prototyping.',
  })
  @IsAscii()
  @Length(0, 280)
  description: string;

  @ApiProperty({
    example: 'Image encoded to Base64',
  })
  @IsAscii()
  mapImage: string;

  @ApiProperty({
    example: 70.72,
  })
  @IsNumber()
  scaleX: number;

  @ApiProperty({
    example: 2914.909,
  })
  @IsNumber()
  scaleY: number;
}
