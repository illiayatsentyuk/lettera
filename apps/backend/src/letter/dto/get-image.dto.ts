import { IsString, IsNotEmpty } from 'class-validator';

export class GetImageDto {
  @IsString()
  @IsNotEmpty()
  letter: string;

  @IsString()
  @IsNotEmpty()
  language: string;
}
