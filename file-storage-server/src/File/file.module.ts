import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Files } from '../entities/Files.entity';
import { Rooms } from '../entities/Rooms.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Files, Rooms])],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
