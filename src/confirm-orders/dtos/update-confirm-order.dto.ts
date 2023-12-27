import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
  Min,
} from 'class-validator';

export class UpdateConfirmOrderDTO {
  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  fName: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  lName: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 100)
  address: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  phone: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
