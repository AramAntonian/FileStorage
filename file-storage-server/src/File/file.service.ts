import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Files } from '../entities/Files.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FileService {
  constructor(@InjectRepository(Files) private filesRepo: Repository<Files>) {}
}
