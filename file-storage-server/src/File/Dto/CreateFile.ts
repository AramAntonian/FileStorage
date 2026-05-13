import { IsString, IsNumber } from 'class-validator';

export class CreateFileDto {
  @IsString()
  name: string;

  @IsString()
  path: string;

  @IsNumber()
  size: number;

  @IsString()
  type: string;

  @IsNumber()
  roomId: number;
}
