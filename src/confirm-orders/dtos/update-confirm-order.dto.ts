import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

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
  @IsString()
  @Length(3, 20)
  phone: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
