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

  @IsString()
  @Length(0, 1000)
  description: string;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  productId: string;

  @IsString()
  @IsUUID()
  userId: string;
}
