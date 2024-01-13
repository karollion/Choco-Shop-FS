import { IsEmail, IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class CreateConfirmOrderDTO {
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
  @Length(3, 100)
  address: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  phone: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsUUID()
  userId: string;
}
