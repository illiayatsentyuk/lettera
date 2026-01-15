import { IsString, IsNotEmpty } from 'class-validator';

export class GetLettersDto {
  @IsString()
  @IsNotEmpty()
  language: string;
}
