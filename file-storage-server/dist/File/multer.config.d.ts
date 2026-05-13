import { FileService } from './file.service';
export declare const multerConfig: (filesService: FileService) => {
    storage: import("multer").StorageEngine;
};
