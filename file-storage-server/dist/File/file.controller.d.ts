import { FileService } from './file.service';
import express from 'express';
export declare class FileController {
    private readonly filesService;
    constructor(filesService: FileService);
    uploadFiles(files: Express.Multer.File[], roomId: string): Promise<{
        message: string;
        count: number;
    }>;
    downloadFile(res: express.Response, id: number): Promise<void>;
}
