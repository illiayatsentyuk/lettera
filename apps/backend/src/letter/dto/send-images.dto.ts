import { IsString, IsNotEmpty } from 'class-validator';

export class SendImagesDto {
  @IsString()
  @IsNotEmpty()
  userImage: string;

  @IsString()
  @IsNotEmpty()
  ethalonImage: string;

  @IsString()
  @IsNotEmpty()
  letter: string;

  @IsString()
  @IsNotEmpty()
  language: string;

  @IsString()
  @IsNotEmpty()
  systemLanguage: string;
}
