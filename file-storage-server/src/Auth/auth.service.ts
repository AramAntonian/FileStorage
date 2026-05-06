import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Users } from '../entities/Users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { RoomService } from '../Room/room.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users) private usersRepo: Repository<Users>,
    private readonly roomService: RoomService,
  ) {}

  async login(name: string, password: string) {
    if (!name || !password) {
      throw new HttpException('Bad credentials', HttpStatus.BAD_REQUEST);
    }
    try {
      const user = await this.usersRepo.findOne({ where: { name } });
      if (!user) {
        return new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        console.log(`${user.name} logged in`);
        return { name: user.name };
      }

      return new HttpException('Passwords do not match', HttpStatus.NOT_FOUND);
    } catch {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.REQUEST_TIMEOUT,
      );
    }
  }

  async register(name: string, password: string) {
    if (!name || !password) {
      throw new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST);
    }
    try {
      const user = await this.usersRepo.findOne({ where: { name } });
      if (user) {
        return new HttpException('User already exist', HttpStatus.NOT_FOUND);
      }
      const HashedPassword = await bcrypt.hash(password, 5);
      const room = await this.roomService.createForUser(name);
      await this.usersRepo.save({
        name,
        password: HashedPassword,
        room,
      });
      console.log(`${name} created successfully`);
      return new HttpException('User created', HttpStatus.OK);
    } catch {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.REQUEST_TIMEOUT,
      );
    }
  }
}
