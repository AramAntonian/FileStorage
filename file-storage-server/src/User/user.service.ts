import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/Users.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(Users) private userRepo: Repository<Users>) {}

  getUser() {
    return '';
  }

  async getUserRooms(name: string) {
    if (!name) {
      throw new NotFoundException('name is required');
    }
    const user = await this.userRepo.findOne({
      where: { name },
      relations: ['rooms'],
    });
    console.log(user);
    if (user && user.rooms) {
      return user.rooms;
    } else {
      return [];
    }
  }

  async getAllUsers() {
    return this.userRepo.find();
  }
}
