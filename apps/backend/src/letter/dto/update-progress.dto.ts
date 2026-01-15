import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateProgressDto {
  @IsString()
  @IsNotEmpty()
  letter: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsNotEmpty()
  language: string;
}
