import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
  Query,
  ParseIntPipe,
  Get,
  Res,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as fs from 'fs';
import { FileService } from './file.service';
import express from 'express';

@Controller('file')
export class FileController {
  constructor(private readonly filesService: FileService) {}

  @Post()
  @UseInterceptors(
    FilesInterceptor('files', 20, {
      storage: diskStorage({
        destination: (req: express.Request, file, cb) => {
          const user = req.query.user as string;
          const roomId = req.query.roomId as string;

          console.log(roomId, user);

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
    @Query('roomId') roomId: string,
  ) {
    const savedFiles = await Promise.all(
      files.map((file) =>
        this.filesService.saveFile(file, {
          name: file.originalname,
          path: file.path,
          size: file.size,
          type: file.mimetype,
          roomId: +roomId,
        }),
      ),
    );

    return {
      message: 'Files uploaded successfully',
      count: savedFiles.length,
    };
  }

  @Get('')
  async downloadFile(
    @Res() res: express.Response,
    @Query('id', ParseIntPipe) id: number,
  ) {
    const file = await this.filesService.downloadFile(id);
    res.setHeader('Content-Disposition', `attachment; filename="${file.name}"`);

    return res.sendFile(file.path);
  }
}
