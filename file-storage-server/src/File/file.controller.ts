import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as fs from 'fs';
import { FileService } from './file.service';
import { UploadFilesDto } from './Dto/UploadFile';
import { Request } from 'express';

interface MulterRequest extends Request {
  body: {
    user: string;
    roomId: string;
  };
}

@Controller('file')
export class FileController {
  constructor(private readonly filesService: FileService) {}

  @Post()
  @UseInterceptors(
    FilesInterceptor('files', 20, {
      storage: diskStorage({
        destination: (req: Request, file, cb) => {
          const user = req.query.user as string;
          const roomId = req.query.roomId as string;

          const dir = `/home/arxo/arxo/lessons/files/${user}/${roomId}`;

          fs.mkdirSync(dir, { recursive: true });

          cb(null, dir);
        },

        filename: (_req, file, cb) => {
          const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);

          cb(null, `${file.fieldname}-${unique}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async uploadFiles(
    @UploadedFiles() files: Express.Multer.File[],
    @Body() body: UploadFilesDto,
  ) {
    const savedFiles = await Promise.all(
      files.map((file) =>
        this.filesService.saveFile(file, {
          name: file.originalname,
          path: file.path,
          size: file.size,
          type: file.mimetype,
          roomId: body.roomId,
        }),
      ),
    );

    return {
      message: 'Files uploaded successfully',
      count: savedFiles.length,
    };
  }
}
