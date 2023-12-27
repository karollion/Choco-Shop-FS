import {
  IsInt,
  IsNotEmpty,
  IsString,
  IsUUID,
  Length,
  Min,
} from 'class-validator';

export class UpdateOrderDTO {
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  quantity: number;

  @IsNotEmpty()
  @IsString()
  @Length(20, 1000)
  description: string;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  productId: string;

  @IsUUID()
  @IsString()
  confirmId: string;
}
