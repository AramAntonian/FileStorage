import { FileService } from './file.service';
import { UploadFilesDto } from './Dto/UploadFile';
export declare class FileController {
    private readonly filesService;
    constructor(filesService: FileService);
    uploadFiles(files: Express.Multer.File[], body: UploadFilesDto): Promise<{
        message: string;
        count: number;
    }>;
}
