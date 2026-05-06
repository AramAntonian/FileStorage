import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rooms } from '../entities/Rooms.entity';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { Users } from '../entities/Users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rooms, Users])],
  providers: [RoomService],
  controllers: [RoomController],
  exports: [RoomService],
})
export class RoomModule {}
