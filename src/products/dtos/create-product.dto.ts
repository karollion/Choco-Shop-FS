import { IsInt, IsNotEmpty, IsString, Length, Min } from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  name: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  price: number;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  size: number;

  @IsNotEmpty()
  @IsString()
  @Length(20, 1000)
  description: string;

  @IsNotEmpty()
  @IsString()
  photo: string;
}
