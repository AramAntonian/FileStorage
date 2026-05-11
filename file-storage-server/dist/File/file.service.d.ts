import { Files } from '../entities/Files.entity';
import { Repository } from 'typeorm';
export declare class FileService {
    private filesRepo;
    constructor(filesRepo: Repository<Files>);
}
