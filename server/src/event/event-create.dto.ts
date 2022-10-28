import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { Action, Filter, Light } from 'src/app.enums';
export class CreateEventDTO {
  @ApiProperty({
    example: 'PickedUp',
    description: "current enum: 'Found' = 0, 'Dropped' = 1, 'PickedUp' = 2",
  })
  @IsEnum(Action)
  @IsNotEmpty()
  action: number | string;

  @ApiProperty({
    example: '6275d1f9-f95c-43a3-a8fe-8c9cf91d0622',
    description: 'has to be valid user uuid',
  })
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({
    example: 'b9fa129b-3461-4363-b06b-f3a9a8f098bf',
    description: 'has to be valid session uuid',
  })
  @IsUUID()
  @IsNotEmpty()
  sessionId: string;

  @ApiPropertyOptional({
    example: 'a9d1239h-1298-4363-b06b-f3a9a8f098bf',
    description: 'has to be valid evidence uuid'
  })
  @IsOptional()
  @IsUUID()
  evidenceId?: string;

  @ApiPropertyOptional({
    example: 'Violet',
    description:
      "current enum: 'White' = 0, 'Violet' = 1, 'Blue' = 2, 'BlueGreen' = 3, 'Green' = 4",
  })
  @IsEnum(Light)
  @IsOptional()
  light?: number | string;

  @ApiPropertyOptional({
    example: 'Glasses435nm',
    description:
      "current enum: 'GlassesBase' = 0, 'Glasses435nm' = 1, 'Glasses476nm' = 2, 'Glasses529nm' = 3, 'Glasses549nm' = 4",
  })
  @IsEnum(Filter)
  @IsOptional()
  filter?: number | string;
}
