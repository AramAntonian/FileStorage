import { IsNumber, IsString } from 'class-validator';

export class UploadFilesDto {
  @IsString()
  user: string;

  @IsNumber()
  roomId: number;
}
