import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as fs from 'fs';
import { extname } from 'path';
import { Files } from '../entities/Files.entity';
import { Rooms } from '../entities/Rooms.entity';
import { CreateFileDto } from './Dto/CreateFile';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(Files)
    private filesRepository: Repository<Files>,

    @InjectRepository(Rooms)
    private roomsRepository: Repository<Rooms>,
  ) {}

  createUploadPath(user: string, room: string): string {
    const dir = `/home/arxo/arxo/lessons/files/${user}/${room}`;
    fs.mkdirSync(dir, { recursive: true });
    return dir;
  }

  generateFilename(file: Express.Multer.File): string {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);

    return `${file.fieldname}-${unique}${extname(file.originalname)}`;
  }

  async saveFile(file: Express.Multer.File, dto: CreateFileDto) {
    const room = await this.roomsRepository.findOne({
      where: { id: dto.roomId },
    });

    if (!room) {
      throw new Error('Room not found');
    }

    const entity = this.filesRepository.create({
      name: dto.name,
      path: dto.path,
      size: dto.size,
      type: dto.type,
      room,
    });

    return this.filesRepository.save(entity);
  }

  async downloadFile(id: number) {
    const file = await this.filesRepository.findOne({ where: { id } });

    if (!file) {
      throw new HttpException('File not found', HttpStatus.NOT_FOUND);
    }
    return file;
  }
}
