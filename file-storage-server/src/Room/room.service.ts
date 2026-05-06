import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Rooms } from '../entities/Rooms.entity';
import { CreateRoomDto } from './Dto/CreateRoomDto';
import { Users } from '../entities/Users.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Rooms) private roomsRepo: Repository<Rooms>,
    @InjectRepository(Users)
    private readonly usersRepo: Repository<Users>,
  ) {}

  async create(room: CreateRoomDto) {
    if (!room.name?.trim()) {
      throw new HttpException('Invalid room name', HttpStatus.BAD_REQUEST);
    }

    try {
      const users = await this.usersRepo.findBy({
        name: In(room.users),
      });

      const newRoom = await this.roomsRepo.save({
        name: room.name,
        users,
      });

      return {
        message: 'Room created',
      };
    } catch {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getAllRooms() {
    try {
      return this.roomsRepo.find({ relations: ['users'] });
    } catch {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async delete(id: number) {
    const result = await this.roomsRepo.delete(id);

    if (result.affected === 0) {
      throw new HttpException('Room not found', HttpStatus.NOT_FOUND);
    }

    return { message: 'Room deleted successfully' };
  }

  async createForUser(name: string) {
    if (!name?.trim()) {
      throw new HttpException('Invalid room name', HttpStatus.BAD_REQUEST);
    }

    try {
      return await this.roomsRepo.save({
        name: uuidv4(),
      });
    } catch {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
