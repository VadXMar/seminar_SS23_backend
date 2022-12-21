import { ApiProperty } from '@nestjs/swagger';

import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class UpdateTodoDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  content: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(10)
  @ApiProperty()
  priority: number;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  finished: boolean;
}
