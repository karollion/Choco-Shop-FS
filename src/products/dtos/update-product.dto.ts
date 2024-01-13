import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
  Min,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { Size } from '@prisma/client';

export class UpdateProductDTO {
  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  name: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  price: number;

  @IsNotEmpty()
  @IsString()
  @Length(1, 4)
  @Transform(({ value }) => value.toUpperCase()) // Added to ensure that the enuma value will be in uppercase letters
  size: Size;

  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  category: string;

  @IsNotEmpty()
  @IsBoolean()
  isNew: boolean;

  @IsNotEmpty()
  @IsString()
  @Length(20, 1000)
  description: string;

  @IsNotEmpty()
  @IsString()
  photo: string;
}
