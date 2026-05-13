import { Repository } from 'typeorm';
import { Files } from '../entities/Files.entity';
import { Rooms } from '../entities/Rooms.entity';
import { CreateFileDto } from './Dto/CreateFile';
export declare class FileService {
    private filesRepository;
    private roomsRepository;
    constructor(filesRepository: Repository<Files>, roomsRepository: Repository<Rooms>);
    createUploadPath(user: string, room: string): string;
    generateFilename(file: Express.Multer.File): string;
    saveFile(file: Express.Multer.File, dto: CreateFileDto): Promise<Files>;
}
